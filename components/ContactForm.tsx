'use client';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useState } from 'react';
import { FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

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
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  
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
    setSubmitStatus('idle');
    setErrorMessage('');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        signal: AbortSignal.timeout(10000)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Ошибка при отправке формы');
      }

      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Ошибка:', error);
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Произошла ошибка при отправке');
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
        
        {/* Сообщение об успешной отправке */}
        {submitStatus === 'success' && (
          <div className="mb-8 p-4 bg-green-50 text-green-700 rounded-lg flex items-start gap-3">
            <FiCheckCircle className="text-green-500 text-xl mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-bold">Спасибо!</h3>
              <p>Ваше сообщение успешно отправлено. Мы свяжемся с вами в ближайшее время.</p>
            </div>
          </div>
        )}
        
        {/* Сообщение об ошибке */}
        {submitStatus === 'error' && (
          <div className="mb-8 p-4 bg-red-50 text-red-700 rounded-lg flex items-start gap-3">
            <FiAlertCircle className="text-red-500 text-xl mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-bold">Ошибка</h3>
              <p>{errorMessage || 'Произошла ошибка при отправке формы'}</p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-primary mb-6">Наши контакты</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 text-primary">
                  <Image 
                    src="/phone-svgrepo-com.svg" 
                    alt="Phone Icon" 
                    width={24} 
                    height={24}
                    className="w-full h-full object-contain filter brightness-0 invert-[60%]"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Телефон</h4>
                  <p className="text-gray-700">+7 (123) 456-78-90</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 text-primary">
                  <Image 
                    src="/email-svgrepo-com.svg" 
                    alt="Email Icon" 
                    width={24} 
                    height={24}
                    className="w-full h-full object-contain filter brightness-0 invert-[60%]"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Почта</h4>
                  <p className="text-gray-700">dmitrovdor@mail.ru</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 text-primary">
                  <Image 
                    src="/address-svgrepo-com.svg" 
                    alt="Address Icon" 
                    width={24} 
                    height={24}
                    className="w-full h-full object-contain filter brightness-0 invert-[60%]"
                  />
                </div>
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
              disabled={isSubmitting}
              className={`w-full bg-primary text-white py-3 px-6 rounded-lg font-bold hover:bg-primary/90 transition-colors ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Отправка...
                </span>
              ) : (
                'Отправить заявку'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};