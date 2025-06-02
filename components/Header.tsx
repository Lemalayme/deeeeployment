"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Закрытие меню при изменении размера экрана
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Эффект для отслеживания скролла
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Закрытие меню при клике на ссылку
  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { href: '#about', label: 'О нас' },
    { href: '#services', label: 'Услуги' },
    { href: '#projects', label: 'Проекты' },
    { href: '#contact', label: 'Контакты' },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 w-full backdrop-blur-sm shadow-md transition-colors duration-300 ${
        isScrolled || isMenuOpen 
          ? 'bg-white/90 text-black' 
          : 'bg-transparent text-black'
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="z-50" onClick={handleNavClick}>
          <Image 
            src="/Dmitrovdor.svg" 
            alt="Логотип Дмитровдор"
            width={180}
            height={40}
            className="h-10 w-auto"
          />
        </Link>
        
        {/* Десктопное меню */}
        <nav className="hidden md:flex items-center gap-4 absolute left-1/2 transform -translate-x-1/2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-6 py-2 rounded-full bg-white/30 backdrop-blur-sm 
                       border border-gray-200 hover:bg-white/50 
                       transition-all duration-300 shadow-sm
                       text-gray-700 hover:text-gray-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        
        {/* Мобильное меню - кнопка бургера */}
        <button
          className="md:hidden z-50 flex flex-col justify-center items-center w-10 h-10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={isMenuOpen}
        >
          <span className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
          }`}></span>
          <span className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-1 ${
            isMenuOpen ? 'opacity-0' : 'opacity-100'
          }`}></span>
          <span className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
          }`}></span>
        </button>
      </div>

      {/* Мобильное меню - выпадающий список */}
      <div 
        className={`fixed inset-0 top-40   bg-white/95 backdrop-blur-lg transition-all duration-300 ease-in-out transform ${
          isMenuOpen 
            ? 'translate-y-0 opacity-100' 
            : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="container mx-auto h-full flex flex-col justify-center items-center pt-16 px-4">
          <nav className="flex flex-col items-center gap-6 w-full">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="w-full max-w-xs text-center py-4 rounded-xl bg-white/80 backdrop-blur-sm 
                         border border-gray-200 hover:bg-white transition-all duration-300
                         text-xl font-medium text-gray-800 hover:text-gray-900"
                onClick={handleNavClick}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};