import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import crypto from "crypto";
import { sendPasswordResetEmail } from "@/lib/email";

export async function POST(req: Request) {
    try {
        const { email } = await req.json();

        if (!email) {
            return NextResponse.json({ message: "Email is required" }, { status: 400 });
        }

        const user = await prisma.user.findUnique({
            where: { email },
        });

        if (!user) {
            // Return success even if user doesn't exist to prevent email enumeration
            return NextResponse.json({ message: "Reset link sent if account exists" });
        }

        const resetToken = crypto.randomBytes(32).toString("hex");

        await prisma.user.update({
            where: { email },
            data: { resetToken },
        });

        await sendPasswordResetEmail(email, resetToken);

        return NextResponse.json({ message: "Reset link sent" });
    } catch (error: any) {
        console.error("Forgot password error:", error);
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}
