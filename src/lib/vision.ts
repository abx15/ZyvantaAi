import * as mobilenet from '@tensorflow-models/mobilenet';

let model: mobilenet.MobileNet | null = null;

export async function loadVisionModel() {
    if (!model) {
        model = await mobilenet.load();
    }
    return model;
}

export async function identifyImage(imageElement: HTMLImageElement | HTMLVideoElement | HTMLCanvasElement) {
    try {
        const visionModel = await loadVisionModel();
        const predictions = await visionModel.classify(imageElement);
        return { success: true, predictions };
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        console.error('Vision Analysis Error:', error);
        return { success: false, error: message };
    }
}
