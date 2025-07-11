import React from 'react';
const Hero = () => {
  return <section id="hero" className="relative h-screen">
      <div className="absolute inset-0 bg-cover bg-center" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1527567018838-584d3468eb85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
      backgroundBlendMode: 'overlay'
    }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      <div className="relative h-full flex flex-col justify-center items-center text-white text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          <span className="text-rose-500">АДРЕНАЛІН</span> ТА{' '}
          <span className="text-orange-500">ЕКСТРИМ</span> У ЛІСОВІЙ ЗОНІ
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl">
          Пейнтбольні ігри на природі в хвойному лісі біля озера та на території
          покинутого піонерського табору
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#services" className="px-8 py-3 bg-rose-600 hover:bg-rose-700 rounded-lg font-medium transition-colors shadow-lg transform hover:scale-105">
            Наші послуги
          </a>
          <a href="#contact" className="px-8 py-3 bg-transparent border-2 border-orange-500 hover:bg-orange-500 hover:text-white rounded-lg font-medium transition-colors shadow-lg transform hover:scale-105">
            Замовити гру
          </a>
        </div>
      </div>
    </section>;
};
export default Hero;