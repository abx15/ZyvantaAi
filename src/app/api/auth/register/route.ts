import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import { sendVerificationEmail } from "@/lib/email";

export async function POST(req: Request) {
    try {
        const { email, username, name, password } = await req.json();

        if (!email || !username || !password) {
            return NextResponse.json({ message: "Missing fields" }, { status: 400 });
        }

        // Check if email already exists
        const existingEmail = await prisma.user.findUnique({
            where: { email },
        });

        if (existingEmail) {
            return NextResponse.json({ message: "Email already in use" }, { status: 400 });
        }

        // Check if username already exists
        const existingUsername = await prisma.user.findUnique({
            where: { username },
        });

        if (existingUsername) {
            return NextResponse.json({ message: "Username already taken" }, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const verificationToken = crypto.randomBytes(32).toString("hex");

        const user = await prisma.user.create({
            data: {
                email,
                username,
                name,
                password: hashedPassword,
                verificationToken,
            },
        });

        // Send verification email
        try {
            await sendVerificationEmail(email, verificationToken);
        } catch (error) {
            console.error("Failed to send verification email:", error);
            // We still created the user, they might need to request a new link later
        }

        return NextResponse.json({ message: "User registered successfully" }, { status: 201 });
    } catch (error: any) {
        console.error("Registration error:", error);
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}
