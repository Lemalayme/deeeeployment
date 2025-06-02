import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  const { name, email, phone, message } = await request.json();
  
  // Проверяем наличие переменных окружения
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD || !process.env.EMAIL_TO) {
    console.error('Missing email configuration in environment variables');
    return NextResponse.json(
      { error: 'Server configuration error' },
      { status: 500 }
    );
  }

  // Правильная конфигурация для Mail.ru
  const transporter = nodemailer.createTransport({
    host: 'smtp.mail.ru',
    port: 465,
    secure: true, // SSL
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    },
    connectionTimeout: 5000
  });

  try {
    await transporter.sendMail({
      from: `"Website Form" <${process.env.EMAIL_USER}>`, // Форматируем правильно
      to: process.env.EMAIL_TO,
      subject: `Новая заявка от ${name}`,
      html: `
        <h1>Новая заявка с сайта</h1>
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Телефон:</strong> ${phone || 'не указан'}</p>
        <p><strong>Сообщение:</strong> ${message}</p>
      `
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Ошибка отправки:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Ошибка сервера' },
      { status: 500 }
    );
  }
}