import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';
import { createEmailTemplate } from '../../../lib/emailTemplate';

const contactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(254),
  message: z.string().trim().min(1).max(5000),
});

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Solicitud no valida' }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Revisa tu nombre, correo y mensaje antes de enviar' },
      { status: 400 }
    );
  }

  const user = process.env.EMAIL_USER?.trim();
  const password = process.env.EMAIL_PASSWORD?.trim();
  const recipient = process.env.CONTACT_EMAIL?.trim();
  if (!user || !password || !recipient) {
    return NextResponse.json(
      { error: 'El servicio de correo no esta disponible. Intenta de nuevo mas tarde.' },
      { status: 503 }
    );
  }

  const { name, email, message } = parsed.data;
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user, pass: password },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 20000,
    });
    await transporter.sendMail({
      from: user,
      to: recipient,
      replyTo: email,
      subject: `Nuevo mensaje de ${name.replace(/[\r\n]/g, ' ')} - Portafolio`,
      text: `Nombre: ${name}\nEmail: ${email}\n\n${message}`,
      html: createEmailTemplate({ name, email, message }),
    });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: 'Error al enviar el correo. Intenta de nuevo mas tarde.' },
      { status: 500 }
    );
  }
}