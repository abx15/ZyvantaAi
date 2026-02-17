import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export interface EmailOptions {
  to: string | string[];
  subject: string;
  html: string;
  from?: string;
  replyTo?: string;
}

export const sendEmail = async (options: EmailOptions) => {
  try {
    const { data, error } = await resend.emails.send({
      from: options.from || 'Zyvanta <noreply@zyvanta.com>',
      to: Array.isArray(options.to) ? options.to : [options.to],
      subject: options.subject,
      html: options.html,
      replyTo: options.replyTo,
    });

    if (error) {
      console.error('Email sending failed:', error);
      throw new Error(error.message);
    }

    return { success: true, data };
  } catch (error) {
    console.error('Email service error:', error);
    throw error;
  }
};

export const sendVerificationEmail = async (email: string, token: string) => {
    const url = `${process.env.NEXTAUTH_URL}/auth/verify?token=${token}`;

    await sendEmail({
        from: `"Zyvanta" <${process.env.EMAIL_FROM}>`,
        to: email,
        subject: 'Verify your Zyvanta account',
        html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; rounded: 10px;">
        <h1 style="color: #2563eb; text-align: center;">Welcome to Zyvanta!</h1>
        <p>Thank you for signing up. Please verify your email address to get started.</p>
        <div style="text-align: center; margin: 30px 0;">
          <a href="${url}" style="background-color: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold;">Verify Email Address</a>
        </div>
        <p style="color: #666; font-size: 14px;">If you didn't create an account, you can safely ignore this email.</p>
        <hr style="border: 0; border-top: 1px solid #eee; margin: 30px 0;" />
        <p style="text-align: center; font-size: 12px; color: #999;">© 2026 Zyvanta AI</p>
      </div>
    `,
    });
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
    const url = `${process.env.NEXTAUTH_URL}/auth/reset-password?token=${token}`;

    await sendEmail({
        from: `"Zyvanta" <${process.env.EMAIL_FROM}>`,
        to: email,
        subject: 'Reset your Zyvanta password',
        html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; rounded: 10px;">
        <h1 style="color: #2563eb; text-align: center;">Password Reset Request</h1>
        <p>We received a request to reset your password. Click the button below to choose a new one.</p>
        <div style="text-align: center; margin: 30px 0;">
          <a href="${url}" style="background-color: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold;">Reset Password</a>
        </div>
        <p style="color: #666; font-size: 14px;">If you didn't request a password reset, you can safely ignore this email.</p>
        <hr style="border: 0; border-top: 1px solid #eee; margin: 30px 0;" />
        <p style="text-align: center; font-size: 12px; color: #999;">© 2026 Zyvanta AI</p>
      </div>
    `,
    });
};

export const generateWelcomeEmail = (userName: string) => `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Zyvanta</title>
    <style>
        body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6; color: #374151; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { text-align: center; padding: 40px 0; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px 12px 0 0; color: white; }
        .content { background: #f9fafb; padding: 40px; border-radius: 0 0 12px 12px; }
        .logo { font-size: 28px; font-weight: bold; margin-bottom: 10px; }
        .button { display: inline-block; background: #3b82f6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; margin: 20px 0; }
        .feature { background: white; padding: 20px; border-radius: 8px; margin: 10px 0; border-left: 4px solid #3b82f6; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">✨ Zyvanta</div>
            <h1>Welcome aboard, ${userName}!</h1>
        </div>
        <div class="content">
            <p>Thank you for joining Zyvanta - your AI-powered decision engine for everyday life!</p>
            
            <div class="feature">
                <h3>🏥 Health Insights</h3>
                <p>Get personalized health recommendations and track your wellness journey.</p>
            </div>
            
            <div class="feature">
                <h3>📚 Education Assistant</h3>
                <p>Enhance your learning experience with AI-driven educational tools.</p>
            </div>
            
            <div class="feature">
                <h3>🌾 Agriculture Advisor</h3>
                <p>Optimize your farming decisions with data-driven agricultural insights.</p>
            </div>
            
            <a href="${process.env.NEXTAUTH_URL}/dashboard" class="button">Get Started →</a>
            
            <p style="text-align: center; color: #6b7280; margin-top: 30px;">
                Best regards,<br>
                The Zyvanta Team
            </p>
        </div>
    </div>
</body>
</html>
`;

export const generateContactEmail = (name: string, email: string, message: string) => `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Message</title>
    <style>
        body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6; color: #374151; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 12px 12px 0 0; color: white; }
        .content { background: #f9fafb; padding: 30px; border-radius: 0 0 12px 12px; }
        .field { margin: 15px 0; }
        .label { font-weight: 600; color: #1f2937; }
        .value { background: white; padding: 10px; border-radius: 6px; border-left: 3px solid #3b82f6; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>📬 New Contact Message</h2>
        </div>
        <div class="content">
            <div class="field">
                <div class="label">Name:</div>
                <div class="value">${name}</div>
            </div>
            <div class="field">
                <div class="label">Email:</div>
                <div class="value">${email}</div>
            </div>
            <div class="field">
                <div class="label">Message:</div>
                <div class="value">${message}</div>
            </div>
        </div>
    </div>
</body>
</html>
`;
