
import { resend } from "@/lib/resend";
import { EmailTemplate } from '../components/email-template';

export async function sendEmail(
  email: string,
  name: string,
  message: string
): Promise<any> {
  try {
    await resend.emails.send({
      from: `${name} <onboarding@resend.dev>`,
      to: 'sayanmaity0121@gmail.com',
      subject: `New message from ${name}`,
      react: EmailTemplate({ name, email, message }),
    });
    return { success: true, message: 'Verification email sent successfully.' };
  } catch (emailError) {
    console.error('Error sending verification email:', emailError);
    return { success: false, message: 'Failed to send verification email.' };
  }
}