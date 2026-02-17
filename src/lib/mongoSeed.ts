import connectToDatabase from './mongodb';
import { ChatMemory, ReasoningLog, VisionOutput } from '../models/aiData';

const seedMongo = async () => {
    try {
        await connectToDatabase();

        // Clear existing data (optional, but good for seeding)
        await ChatMemory.deleteMany({});
        await ReasoningLog.deleteMany({});
        await VisionOutput.deleteMany({});

        const userId = 'seed-user-id';

        // Seed Chat Memory
        await ChatMemory.create({
            userId,
            messages: [
                { role: 'user', content: 'What is the best crop for June?' },
                { role: 'assistant', content: 'Rice and Maize are excellent choices for June in this region.' }
            ]
        });

        // Seed Reasoning Log
        await ReasoningLog.create({
            userId,
            input: 'Calculate crop ROI for Rice',
            thoughtProcess: 'Checked market rates, estimated fertilizer cost, and water requirements.',
            output: { ROI: '15%', confidence: 0.92 },
            modelUsed: 'open-ai-gpt4o'
        });

        // Seed Vision Output
        await VisionOutput.create({
            userId,
            imageUrl: 'https://example.com/leaf-rust.jpg',
            detections: [
                { label: 'Leaf Rust', confidence: 0.88, box: [100, 100, 200, 200] }
            ],
            engine: 'tensorflow'
        });

        console.log('✅ MongoDB Seeded Successfully');
    } catch (error) {
        console.error('❌ MongoDB Seeding Error:', error);
    }
};

export default seedMongo;
