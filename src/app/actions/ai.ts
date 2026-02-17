'use server';

import { AIOrchestrator, AITaskType } from '@/lib/ai/orchestrator';
import connectToDatabase from '@/lib/mongodb';
import { ReasoningLog } from '@/models/aiData';

export async function processAiDecision(userId: string, taskType: AITaskType, prompt: string) {
    try {
        const result = await AIOrchestrator.processTask(taskType, prompt);

        // Async log to MongoDB for chat memory/reasoning history
        await connectToDatabase();
        await ReasoningLog.create({
            userId,
            input: prompt,
            thoughtProcess: result.metadata?.thought || '',
            output: result.content,
            modelUsed: `${result.provider}:${result.model}`,
        });

        return { success: true, data: result };
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        console.error('AI Processing Error:', error);
        return { success: false, error: message };
    }
}

export async function transcribeAudio(formData: FormData) {
    try {
        const file = formData.get('file') as File;
        if (!file) throw new Error('No audio file provided');

        // OpenAI Whisper API configuration
        const response = await fetch('https://api.openai.com/v1/audio/transcriptions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
            },
            body: formData,
        });

        if (!response.ok) throw new Error('Whisper transcription failed');
        const data = await response.json();

        return { success: true, text: data.text };
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        console.error('Transcription Error:', error);
        return { success: false, error: message };
    }
}
