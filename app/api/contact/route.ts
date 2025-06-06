import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Инициализация Resend
const resend = new Resend(process.env.RESEND_API_KEY);

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  // Парсинг данных формы
  const { name, email, phone, message } = await request.json().catch(() => null);
  
  // Валидация обязательных полей
  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'Неверные данные формы' },
      { status: 400 }
    );
  }
resend.domains.create({ name: 'dmitrovdor.store' });
resend.domains.get('d91cd9bd-1176-453e-8fc1-35364d380206');
resend.domains.verify('d91cd9bd-1176-453e-8fc1-35364d380206');
  try {
    // Отправка письма через Resend
    const { data} = await resend.emails.send({
      from: 'mail@dmitrovdor.store', // Используйте верифицированный домен
      to: process.env.EMAIL_TO!, // Получатель из переменных окружения
      subject: `Новая заявка от ${name}`,
      text: `Имя: ${name}\nEmail: ${email}\nТелефон: ${phone || 'не указан'}\nСообщение: ${message}`,
      // Альтернативно можно использовать HTML:
      html: `
        <h1>Новая заявка</h1>
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Телефон:</strong> ${phone}</p>` : ''}
        <p><strong>Сообщение:</strong> ${message}</p>
      `
    });

   

    return NextResponse.json({ success: true, data });
    
 
  } catch (error) {}
}