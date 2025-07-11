import React from 'react';
const About = () => {
  return <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-rose-600">
          Про наш клуб
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg mb-6 text-gray-700">
              Наш пейнтбольний клуб пропонує унікальні ігрові локації в оточенні
              природи. Ми розташовані в мальовничому хвойному лісі на березі
              озера, що створює неповторну атмосферу для{' '}
              <span className="font-semibold text-rose-600">
                активного відпочинку
              </span>
              .
            </p>
            <p className="text-lg mb-6 text-gray-700">
              Окрім лісової зони, ми маємо ексклюзивну локацію - територію
              колишнього піонерського табору, яка ідеально підходить для
              тактичних міських ігрових сценаріїв та створює атмосферу{' '}
              <span className="font-semibold text-orange-500">
                постапокаліптичних ігор
              </span>
              .
            </p>
            <p className="text-lg text-gray-700">
              Наша команда складається з досвідчених інструкторів, які
              забезпечують безпеку під час гри та допомагають новачкам швидко
              освоїти правила. Ми пропонуємо якісне обладнання, різноманітні
              сценарії та{' '}
              <span className="font-semibold text-yellow-500">
                незабутні емоції
              </span>{' '}
              для всіх гравців.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1551316679-9c6ae9dec224?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Пейнтбольна гра в лісі" className="rounded-lg shadow-lg h-64 w-full object-cover transform hover:scale-[1.02] transition-transform border-2 border-rose-500" />
            <img src="https://images.unsplash.com/photo-1610217053402-b598aa3e8f7c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Пейнтбольне спорядження" className="rounded-lg shadow-lg h-64 w-full object-cover transform hover:scale-[1.02] transition-transform border-2 border-orange-500" />
            <img src="https://images.unsplash.com/photo-1580238053495-b9720401fd45?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Озеро біля пейнтбольного клубу" className="rounded-lg shadow-lg h-64 w-full object-cover transform hover:scale-[1.02] transition-transform border-2 border-orange-500" />
            <img src="https://images.unsplash.com/photo-1517436073-3b1b1b1b1b1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Покинутий піонерський табір" className="rounded-lg shadow-lg h-64 w-full object-cover transform hover:scale-[1.02] transition-transform border-2 border-rose-500" />
          </div>
        </div>
      </div>
    </section>;
};
export default About;