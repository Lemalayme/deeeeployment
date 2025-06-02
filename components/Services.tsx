const services = [
  {
    id: 1,
    title: "Жилищное строительство",
    description: "Строительство жилых домов и комплексов с полной инфраструктурой.",
  },
  {
    id: 2,
    title: "Коммерческое строительство",
    description: "Возведение офисных зданий, торговых центров и других коммерческих объектов.",
  },
  {
    id: 3,
    title: "Строительство и ремонт дорог",
    description: "Строительство и ремонт новых дорог, включая автомагистрали, городские улицы",
  },
  {
    id: 4,
    title: "Реконструкция и ремонт",
    description: "Капитальный ремонт и реконструкция зданий с повышением энергоэффективности.",
  },
  {
    id: 5,
    title: "Проектирование",
    description: "Разработка проектной документации и 3D-моделирование объектов.",
  },
  {
    id: 6,
    title: "Инженерные системы",
    description: "Монтаж и обслуживание всех видов инженерных сетей.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4 font-title">Наши услуги</h2>
          <div className="h-1 w-20 bg-accent mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
              <p className="text-gray-700 mb-6">{service.description}</p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};