import EmailTemplate from '../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const body = await req.json();
  const { email, subject, message} = body;
  
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: ['nyk.com.sg@gmail.com', email],
      subject: subject,
      react: EmailTemplate({email : email, subject: subject, message: message }),
    });

    return Response.json(data);
  } catch (error) {
    console.log()
    return Response.json({ error });
  }
}
