import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import { Role } from "@prisma/client";
import bcrypt from "bcryptjs";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                console.log('🔍 NextAuth authorize called');
                console.log('Credentials:', { email: credentials?.email, password: credentials?.password ? '***' : 'missing' });
                console.log('Environment check:', {
                    secret: !!process.env.NEXTAUTH_SECRET,
                    url: process.env.NEXTAUTH_URL,
                    database: !!process.env.DATABASE_URL
                });
                
                if (!credentials?.email || !credentials?.password) {
                    console.log('❌ Missing credentials');
                    return null;
                }

                try {
                    console.log('🔍 Searching for user:', credentials.email);
                    const user = await prisma.user.findUnique({
                        where: { email: credentials.email },
                    });

                    console.log('User found:', !!user);
                    
                    if (!user || !user.password) {
                        console.log('❌ User not found or no password');
                        return null;
                    }

                    console.log('🔍 Comparing password...');
                    const isValid = await bcrypt.compare(credentials.password, user.password);
                    console.log('Password valid:', isValid);
                    
                    if (!isValid) {
                        console.log('❌ Invalid password');
                        return null;
                    }

                    const result = {
                        id: user.id,
                        email: user.email,
                        name: user.name,
                        role: user.role,
                    };
                    
                    console.log('✅ Authorization successful:', result);
                    return result;
                } catch (error) {
                    console.error('❌ Authorize error:', error);
                    return null;
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.role = (user as unknown as { role: Role }).role;
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                (session.user as unknown as { role: Role }).role = token.role as Role;
                (session.user as unknown as { id: string }).id = token.id as string;
            }
            return session;
        },
    },
    pages: {
        signIn: "/auth/login",
    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    debug: process.env.NODE_ENV === 'development',
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
