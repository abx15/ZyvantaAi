export type AITaskType = 'explanation' | 'reasoning' | 'educational' | 'offline' | 'vision';

export interface AIResponse {
    content: string;
    model: string;
    provider: string;
    metadata?: Record<string, unknown>;
    responseTime?: number;
    tokensUsed?: number;
}

export interface AIModel {
    name: string;
    provider: string;
    capabilities: string[];
    maxTokens: number;
    isOnline: boolean;
    responseTime: number;
}

export class AIOrchestrator {
    private static models: AIModel[] = [
        {
            name: 'GPT-4',
            provider: 'OpenAI',
            capabilities: ['reasoning', 'analysis', 'coding', 'writing'],
            maxTokens: 8192,
            isOnline: true,
            responseTime: 1200
        },
        {
            name: 'Gemini Pro',
            provider: 'Google',
            capabilities: ['vision', 'text', 'code', 'translation'],
            maxTokens: 32768,
            isOnline: true,
            responseTime: 800
        },
        {
            name: 'Grok',
            provider: 'xAI',
            capabilities: ['realtime', 'analysis', 'research', 'qa'],
            maxTokens: 4096,
            isOnline: true,
            responseTime: 1500
        },
        {
            name: 'Llama 3',
            provider: 'Ollama',
            capabilities: ['privacy', 'offline', 'custom', 'secure'],
            maxTokens: 4096,
            isOnline: false,
            responseTime: 2000
        }
    ];

    private static async getOpenAIResponse(prompt: string): Promise<AIResponse> {
        const startTime = Date.now();
        
        try {
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    model: 'gpt-4',
                    messages: [{ role: 'user', content: prompt }],
                    max_tokens: 2000,
                    temperature: 0.7,
                }),
            });

            if (!response.ok) {
                throw new Error(`OpenAI API error: ${response.statusText}`);
            }

            const data = await response.json();
            const responseTime = Date.now() - startTime;

            return {
                content: data.choices[0].message.content,
                model: 'gpt-4',
                provider: 'OpenAI',
                responseTime,
                tokensUsed: data.usage?.total_tokens,
                metadata: {
                    finishReason: data.choices[0].finish_reason,
                    modelUsed: data.model
                }
            };
        } catch (error) {
            console.error('OpenAI Error:', error);
            return {
                content: "I apologize, but I'm currently unable to process your request with OpenAI. Please try again later or select a different AI model.",
                model: 'gpt-4',
                provider: 'OpenAI',
                responseTime: Date.now() - startTime,
                metadata: { error: error instanceof Error ? error.message : 'Unknown error' }
            };
        }
    }

    private static async getGeminiResponse(prompt: string): Promise<AIResponse> {
        const startTime = Date.now();
        
        try {
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: prompt }] }],
                    generationConfig: {
                        temperature: 0.7,
                        maxOutputTokens: 2000,
                    },
                }),
            });

            if (!response.ok) {
                throw new Error(`Gemini API error: ${response.statusText}`);
            }

            const data = await response.json();
            const responseTime = Date.now() - startTime;

            return {
                content: data.candidates[0].content.parts[0].text,
                model: 'gemini-pro',
                provider: 'Google',
                responseTime,
                tokensUsed: data.usageMetadata?.totalTokenCount,
                metadata: {
                    finishReason: data.candidates[0].finishReason,
                    safetyRatings: data.candidates[0].safetyRatings
                }
            };
        } catch (error) {
            console.error('Gemini Error:', error);
            return {
                content: "I apologize, but I'm currently unable to process your request with Gemini. Please try again later or select a different AI model.",
                model: 'gemini-pro',
                provider: 'Google',
                responseTime: Date.now() - startTime,
                metadata: { error: error instanceof Error ? error.message : 'Unknown error' }
            };
        }
    }

    private static async getGrokResponse(prompt: string): Promise<AIResponse> {
        const startTime = Date.now();
        
        try {
            // Placeholder for Grok API call
            // Replace with actual xAI API implementation when available
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            return {
                content: `Grok response to: ${prompt}\n\nNote: This is a placeholder implementation. Please configure the xAI Grok API key for full functionality.`,
                model: 'grok-1',
                provider: 'xAI',
                responseTime: Date.now() - startTime,
                metadata: { status: 'placeholder' }
            };
        } catch (error) {
            console.error('Grok Error:', error);
            return {
                content: "I apologize, but I'm currently unable to process your request with Grok. Please try again later or select a different AI model.",
                model: 'grok-1',
                provider: 'xAI',
                responseTime: Date.now() - startTime,
                metadata: { error: error instanceof Error ? error.message : 'Unknown error' }
            };
        }
    }

    private static async getOllamaResponse(prompt: string): Promise<AIResponse> {
        const startTime = Date.now();
        
        try {
            const baseUrl = process.env.OLLAMA_BASE_URL || 'http://localhost:11434';
            const response = await fetch(`${baseUrl}/api/generate`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    model: 'llama3',
                    prompt: prompt,
                    stream: false,
                    options: {
                        temperature: 0.7,
                        num_predict: 2000,
                    }
                }),
            });

            if (!response.ok) {
                throw new Error('Ollama connection failed');
            }

            const data = await response.json();
            const responseTime = Date.now() - startTime;

            return {
                content: data.response,
                model: 'llama3',
                provider: 'Local (Ollama)',
                responseTime,
                tokensUsed: data.eval_count,
                metadata: {
                    modelLoaded: data.model,
                    totalDuration: data.total_duration
                }
            };
        } catch (error) {
            console.error('Ollama Error:', error);
            return {
                content: "Local AI is currently unavailable. Please check if Ollama is running and accessible.",
                model: 'llama3',
                provider: 'Local-Error',
                responseTime: Date.now() - startTime,
                metadata: { error: error instanceof Error ? error.message : 'Unknown error' }
            };
        }
    }

    static getAvailableModels(): AIModel[] {
        return this.models;
    }

    static getBestModelForTask(taskType: AITaskType): AIModel | null {
        const taskModelMapping: Record<AITaskType, string> = {
            'reasoning': 'GPT-4',
            'explanation': 'Gemini Pro',
            'educational': 'GPT-4',
            'vision': 'Gemini Pro',
            'offline': 'Llama 3'
        };

        const preferredModelName = taskModelMapping[taskType];
        return this.models.find(model => model.name === preferredModelName) || null;
    }

    static async processTask(taskType: AITaskType, prompt: string, preferredModel?: string): Promise<AIResponse> {
        // Use preferred model if specified and available
        if (preferredModel) {
            const model = this.models.find(m => m.name.toLowerCase() === preferredModel.toLowerCase());
            if (model && model.isOnline) {
                return this.executeModel(model.name, prompt);
            }
        }

        // Auto-select best model for task
        const bestModel = this.getBestModelForTask(taskType);
        if (bestModel && bestModel.isOnline) {
            return this.executeModel(bestModel.name, prompt);
        }

        // Fallback to any available online model
        const onlineModel = this.models.find(m => m.isOnline);
        if (onlineModel) {
            return this.executeModel(onlineModel.name, prompt);
        }

        // Last resort: try offline model
        return this.getOllamaResponse(prompt);
    }

    private static async executeModel(modelName: string, prompt: string): Promise<AIResponse> {
        switch (modelName.toLowerCase()) {
            case 'gpt-4':
                return this.getOpenAIResponse(prompt);
            case 'gemini pro':
                return this.getGeminiResponse(prompt);
            case 'grok':
            case 'grok-1':
                return this.getGrokResponse(prompt);
            case 'llama3':
                return this.getOllamaResponse(prompt);
            default:
                return this.getOpenAIResponse(prompt);
        }
    }

    static async processMultiModelQuery(prompt: string): Promise<AIResponse[]> {
        const onlineModels = this.models.filter(m => m.isOnline);
        const responses = await Promise.allSettled(
            onlineModels.map(model => this.executeModel(model.name, prompt))
        );

        return responses
            .filter((result): result is PromiseFulfilledResult<AIResponse> => result.status === 'fulfilled')
            .map(result => result.value);
    }
}
