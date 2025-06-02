import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 font-title">Дмитровдор</h3>
            <p className="text-gray-300 mb-6">
              Качественное строительство для вашего бизнеса и жизни.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Компания</h4>
            <ul className="space-y-2">
              <li><Link href="#about" className="text-gray-300 hover:text-white transition-colors">О нас</Link></li>
              <li><Link href="#projects" className="text-gray-300 hover:text-white transition-colors">Проекты</Link></li>
              <li><Link href="#contact" className="text-gray-300 hover:text-white transition-colors">Контакты</Link></li>
              <li><Link href="/documents" className="text-gray-300 hover:text-white transition-colors">Документы</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span>📞</span>
                <span>+7 (123) 456-78-90</span>
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <span>dmitrovdor@mail.ru</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📍</span>
                <span>г. Дмитров, ул. Профессиональная, д.7, пом.303</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};