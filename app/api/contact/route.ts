import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Отключаем кэширование для этого роута
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  // Быстрая валидация данных
  const { name, email, phone, message } = await request.json().catch(() => null);
  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'Неверные данные формы' },
      { status: 400 }
    );
  }

  // Конфигурация транспортера (лучше вынести в отдельный конфиг)
  const transporter = nodemailer.createTransport({
    service: 'mail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
    secure: true, // Используем SSL
    port: 465, // Стандартный порт для SSL
    connectionTimeout: 5000, // 5 секунд таймаут
  });

  try {
    // Быстрая отправка с таймаутом
    const sendPromise = transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `Новая заявка от ${name}`,
      text: `Имя: ${name}\nEmail: ${email}\nТелефон: ${phone}\nСообщение: ${message}`,
    });

    // Таймаут 8 секунд
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