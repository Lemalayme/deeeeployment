import Image from 'next/image';

const features = [
  {
    title: 'Качество',
    description: 'Используем только проверенные материалы и технологии',
    icon: '✓',
    color: 'bg-blue-100/20'
  },
  {
    title: 'Сроки',
    description: 'Завершаем проекты точно в установленные сроки',
    icon: '⏱️',
    color: 'bg-orange-100/20'
  },
  {
    title: 'Опыт',
    description: '15 лет опыта в строительной отрасли',
    icon: '🏗️',
    color: 'bg-blue-100/20'
  },
  {
    title: 'Гарантия',
    description: 'Предоставляем гарантию на все выполненные работы',
    icon: '🔧',
    color: 'bg-orange-100/20'
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
                  className={`${feature.color} p-6 rounded-xl backdrop-blur-sm border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-2`}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl text-primary">{feature.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">{feature.title}</h3>
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