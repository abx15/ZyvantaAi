import mongoose, { Schema } from 'mongoose';

// Chat Memory Schema
const ChatMemorySchema = new Schema({
    userId: { type: String, required: true, index: true },
    messages: [{
        role: { type: String, enum: ['user', 'assistant', 'system'], required: true },
        content: { type: String, required: true },
        timestamp: { type: Date, default: Date.now }
    }],
}, { timestamps: true });

// AI Reasoning Log Schema
const ReasoningLogSchema = new Schema({
    userId: { type: String, required: true },
    input: { type: String, required: true },
    thoughtProcess: { type: String },
    output: { type: Schema.Types.Mixed },
    modelUsed: { type: String },
    tokenCount: { type: Number },
}, { timestamps: true });

// Vision Output Schema
const VisionOutputSchema = new Schema({
    userId: { type: String, required: true },
    imageUrl: { type: String, required: true },
    detections: [{
        label: String,
        confidence: Number,
        box: [Number]
    }],
    engine: { type: String, default: 'tensorflow' },
}, { timestamps: true });

export const ChatMemory = mongoose.models.ChatMemory || mongoose.model('ChatMemory', ChatMemorySchema);
export const ReasoningLog = mongoose.models.ReasoningLog || mongoose.model('ReasoningLog', ReasoningLogSchema);
export const VisionOutput = mongoose.models.VisionOutput || mongoose.model('VisionOutput', VisionOutputSchema);
