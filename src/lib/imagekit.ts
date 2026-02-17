import ImageKit from "imagekit";

const imagekit = new ImageKit({
    publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
    urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!,
});

export default imagekit;

export async function uploadToImageKit(fileBuffer: Buffer, fileName: string, folder: string = 'general') {
    try {
        const response = await imagekit.upload({
            file: fileBuffer,
            fileName: fileName,
            folder: `/zyvanta/${folder}`,
        });
        return { success: true, url: response.url, fileId: response.fileId };
    } catch (error: any) {
        console.error('ImageKit Upload Error:', error);
        return { success: false, error: error.message };
    }
}
