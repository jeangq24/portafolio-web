import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { createEmailTemplate } from '../../../lib/emailTemplate';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(request: Request) {
    try {
      const { name, email, message } = await request.json();
  
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.CONTACT_EMAIL,
        subject: `Nuevo mensaje de ${name} - Portafolio`,
        html: createEmailTemplate({ name, email, message }),
      };
  
      await transporter.sendMail(mailOptions);
      return NextResponse.json({ success: true });
      
    } catch (error) {
      console.error(error);
      return NextResponse.json(
        { error: 'Error al enviar el correo' },
        { status: 500 }
      );
    }
  }