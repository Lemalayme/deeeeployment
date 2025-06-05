import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  const { name, email, phone, message } = await request.json().catch(() => null);
  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'Неверные данные формы' },
      { status: 400 }
    );
  }


  const transporter = nodemailer.createTransport({
    host: 'smtp.mail.ru',
    service: 'mail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
    secure: true, 
    port: 465,
    connectionTimeout: 5000, 
  });

  try {
  
    const sendPromise = transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `Новая заявка от ${name}`,
      text: `Имя: ${name}\nEmail: ${email}\nТелефон: ${phone}\nСообщение: ${message}`,
    });

    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Timeout')), 8000)
    );

    await Promise.race([sendPromise, timeoutPromise]);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Ошибка отправки:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Ошибка сервера' },
      { status: 500 }
    );
  }
}