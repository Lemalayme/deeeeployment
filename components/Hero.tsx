import Image from 'next/image';

export const Hero = () => {
  return (
    <section className="relative h-[600px] w-full">
      <div className="absolute inset-0 z-0">
        <Image
          src="/homepage.jpg" 
          alt="Строительная площадка"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/80"></div>
      </div>
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-1 max-w-2xl">
            ООО «Дмитровдор»
          </h1>
          <h2 className="text-4xl md:text-3xl font-semibold mb-6 max-w-2xl">
            Ваш надежный партнер в благоустройстве, строительстве и реконструкции автодорожных и инженерных сооружений
          </h2>
        </div>
      </div>
    </section>
  );
};