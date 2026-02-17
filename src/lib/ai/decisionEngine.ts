import { AIOrchestrator } from "@/lib/ai/orchestrator";
import { prisma } from "@/lib/prisma";

export async function generateActionPlan(userId: string, context: string) {
    // 1. Fetch user context from PostgreSQL (Structured)
    const user = await prisma.user.findUnique({
        where: { id: userId },
        include: { familyMembers: true, reminders: true, tasks: true }
    });

    const activeTasksCount = user?.tasks.filter((t: { status: string }) => t.status === 'PENDING').length || 0;

    // 2. Build detailed prompt with system context
    const systemPrompt = `
    User Context:
    - Family Members: ${user?.familyMembers.length || 0}
    - Active Tasks: ${activeTasksCount}
    - Reminders: ${user?.reminders.length || 0}
    
    User Query: "${context}"
    
    You are the Zyvanta Decision Engine. Analyze the user query against their life context (Health, Education, Agriculture).
    Provide a prioritized action plan in JSON format:
    [{ priority: 1, engine: "Health", action: "...", reason: "..." }]
  `;

    // 3. Process with Multi-AI Orchestrator (Reasoning engine - OpenAI)
    const response = await AIOrchestrator.processTask('reasoning', systemPrompt);

    return {
        userSummary: user?.name,
        plan: response.content,
        model: response.model
    };
}
