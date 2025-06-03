import Image from 'next/image';

const features = [
  {
    title: 'Качество',
    description: 'Используем только проверенные материалы и технологии',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="m9 12 2 2 4-4"/>
      </svg>
    ),
    color: 'bg-blue-50 border border-blue-100'
  },
  {
    title: 'Сроки',
    description: 'Завершаем проекты точно в установленные сроки',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    color: 'bg-orange-50 border border-orange-100'
  },
  {
    title: 'Опыт',
    description: '15 лет опыта в строительной отрасли',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    color: 'bg-blue-50 border border-blue-100'
  },
  {
    title: 'Гарантия',
    description: 'Предоставляем гарантию на все выполненные работы',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="m9 12 2 2 4-4"/>
      </svg>
    ),
    color: 'bg-orange-50 border border-orange-100'
  }
];

export const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4 font-title relative inline-block">
            О нашей компании
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-accent"></span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-white rounded-lg p-8 shadow-xl border border-gray-100">
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  <span className="font-semibold text-primary text-xl">Дмитровдор</span> — 
                  ведущая строительная компания с 15-летним опытом работы на рынке.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Наша команда состоит из высококвалифицированных специалистов, 
                  использующих современные технологии и материалы мирового уровня.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className={`${feature.color} p-6 rounded-xl backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col h-full`}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-primary p-2 rounded-full bg-white shadow-sm border">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative group">
            <div className="aspect-video overflow-hidden rounded-2xl shadow-2xl relative transform transition duration-700 hover:scale-[1.02]">
              <Image
                src="/about-image.jpg"
                alt="О компании"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};