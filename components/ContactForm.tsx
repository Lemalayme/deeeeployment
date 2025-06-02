'use client';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useState } from 'react';

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Имя должно содержать не менее 2 символов",
  }),
  email: z.string().email({
    message: "Пожалуйста, введите корректный email",
  }),
  phone: z.string().min(10, {
    message: "Введите корректный номер телефона",
  }),
  message: z.string().min(10, {
    message: "Сообщение должно содержать не менее 10 символов",
  }),
});

type FormData = z.infer<typeof formSchema>;

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || 'Ошибка при отправке формы');
      }

      setSubmitSuccess(true);
      reset();
    } catch (error) {
      console.error('Ошибка при отправке формы:', error);
      alert(error.message || "Произошла ошибка при отправке формы. Пожалуйста, попробуйте позже.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Связаться с нами</h2>
          <div className="h-1 w-20 bg-accent mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-primary mb-6">Наши контакты</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                 <Image src="/phone-svgrepo-com.svg" alt='Address Icon' width="50"height="50"/>
                <div>
                  <h4 className="font-semibold text-primary">Телефон</h4>
                  <p className="text-gray-700">+7 (123) 456-78-90</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 gap-x-6">
                 <Image className=""
                  src="/email-svgrepo-com.svg" alt='Address Icon' width="40"height="40" />
                <div>
                  <h4 className="font-semibold text-primary">Почта</h4>
                  <p className="text-gray-700">dmitrovdor@mail.ru</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
               <Image src="/address-svgrepo-com.svg" alt='Address Icon' width="50"height="50" />
                <div>
                  <h4 className="font-semibold text-primary">Адрес</h4>
                  <p className="text-gray-700">г. Москва, ул. Строителей, д. 10</p>
                </div>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">Имя</label>
              <input
                id="name"
                type="text"
                {...register('name')}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
              <input
                id="email"
                type="email"
                {...register('email')}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-gray-700 mb-2">Телефон</label>
              <input
                id="phone"
                type="tel"
                {...register('phone')}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2">Сообщение</label>
              <textarea
                id="message"
                rows={4}
                {...register('message')}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
              )}
            </div>
            
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 px-6 rounded-lg font-bold hover:bg-primary/90 transition-colors"
            >
              Отправить заявку
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};