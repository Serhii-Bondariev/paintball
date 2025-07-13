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
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpY7JE_GEm-JGbWUfXxUHKTnqwI4_DaEgIxA&s" alt="Пейнтбольна гра в лісі" className="rounded-lg shadow-lg h-64 w-full object-cover transform hover:scale-[1.02] transition-transform border-2 border-rose-500" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7xh82Nx7aviLFcf6FP5zwJRyFeUnqQ6Jx2Q&s" alt="Пейнтбольне спорядження" className="rounded-lg shadow-lg h-64 w-full object-cover transform hover:scale-[1.02] transition-transform border-2 border-orange-500" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTds7aDL2ruDG341NxQwlPwOIEq6woiIiasLg&s" alt="Озеро біля пейнтбольного клубу" className="rounded-lg shadow-lg h-64 w-full object-cover transform hover:scale-[1.02] transition-transform border-2 border-orange-500" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx1vereY8ee0nqNbC8Fg8Pa0fJnj91I4EUgdRXG5ARJYB0ieCIFf04K_uaMcmDANX6n80&usqp=CAU" alt="Покинутий піонерський табір" className="rounded-lg shadow-lg h-64 w-full object-cover transform hover:scale-[1.02] transition-transform border-2 border-rose-500" />
          </div>
        </div>
      </div>
    </section>;
};
export default About;