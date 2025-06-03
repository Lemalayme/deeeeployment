"use client"
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: "Капитальный ремонт ГБПОУ МО «Дмитровский техникум»",
    description: "Выполнение работ по комплексному капитальному ремонту ГБПОУ МО «Дмитровский техникум» по адресу: Московская область, г. Дмитров, ул. Инженерная, д.2а (основное здание учебный корпус)",
    image: "/project1.jpg"
  },
  {
    id: 2,
    title: "Устройство дорог на Объекте»",
    description: "Устройство дорог на Объекте: «Жилой комплекс с подземной автостоянкой, отдельно стоящими ДОУ и школой. 1 этап. Жилой комплекс», расположенный по адресу: г. Москва, ВАО, Преображенское, 1-я ул. Бухвостова, вл. 12/11",
    image:"/noimage.png"
  },
  {
    id: 3,
    title: "устройство дорог общего пользования",
    description: "Работы согласно проектной документации на устройство покрытий Тип 1-5 по адресу: Московская область, г. Лыткарино, ул. Набережная, с кадастровыми номерами 50:53:0000000:6249, 50:53:0020103:2870",
    image:"/noimage.png"
  },
    {
    id: 4,
    title: "укладка асфальтового покрытия и заделка ям на объекте",
    description: "Работы по укладке асфальтового покрытия и заделке ям на объекте Заказчика по адресу: Московская область, г. Дмитров, Промышленная зона",
    image:"/noimage.png"
  },
  {
    id: 5,
    title: "строительно-монтажных работ на объекте АО «ТК РусГидро»",
    description: "Выполнение строительно-монтажных работ на объекте АО «ТК РусГидро» для нужд Загорского строительного участка Центрального филиала , расположенного по адресу: Московская область, Сергиево-Посадский район, рп. Богородское",
    image:"/noimage.png"
  }
];

export const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleExpand = (id: number) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  // Закрытие карточки при скролле
  useEffect(() => {
    const handleScroll = () => {
      if (expandedProject) {
        setExpandedProject(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [expandedProject]);

  // Закрытие карточки при клике вне контейнера
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setExpandedProject(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section id="projects" className="py-20 bg-white" ref={containerRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4 font-title">Наши проекты</h2>
          <div className="h-1 w-20 bg-accent mx-auto"></div>
        </div>
        
        <div className="flex overflow-x-auto pb-8 -mx-4 scrollbar-hide">
          <div className="flex flex-nowrap gap-8 px-4">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className={`w-80 flex-shrink-0 bg-white rounded-lg shadow-lg transition-all duration-300 ${
                  expandedProject === project.id 
                    ? 'shadow-xl scale-[1.02]' 
                    : 'hover:shadow-xl'
                }`}
              >
                <div className="aspect-video relative rounded-t-lg overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="p-6 flex flex-col">
                  <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      expandedProject === project.id 
                        ? 'max-h-[500px]' 
                        : 'max-h-[4.5em]'
                    }`}
                  >
                    <p className="text-gray-700">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="mt-4 pt-2">
                    <button 
                      onClick={() => toggleExpand(project.id)}
                      className="flex items-center text-primary hover:text-primary transition-colors"
                    >
                      {expandedProject === project.id ? (
                        <>
                          Свернуть <FaChevronUp className="ml-1" />
                        </>
                      ) : (
                        <>
                          Подробнее <FaChevronDown className="ml-1" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};