
import { Users2Icon, TrophyIcon, CalendarIcon, ShirtIcon } from 'lucide-react';
const Services = () => {
  const services = [{
    title: 'Командні ігри',
    description: 'Організація командних змагань для друзів, колег та родини з різними сценаріями гри.',
    icon: <Users2Icon size={40} className="text-rose-500" />
  }, {
    title: 'Корпоративні заходи',
    description: 'Спеціальні програми для тімбілдингу та корпоративних свят з індивідуальним підходом.',
    icon: <TrophyIcon size={40} className="text-orange-500" />
  }, {
    title: 'Святкування подій',
    description: 'Організація днів народження, парубочих вечірок та інших урочистих подій.',
    icon: <CalendarIcon size={40} className="text-yellow-500" />
  }, {
    title: 'Оренда спорядження',
    description: 'Професійне обладнання, захисний одяг та все необхідне для гри включено у вартість.',
    icon: <ShirtIcon size={40} className="text-orange-500" />
  }];
  const packages = [{
    title: 'Стандарт',
    price: 'від 500 грн',
    features: ['2 години гри', '100 кульок', 'Базове спорядження', '1 ігрова локація', 'Інструктаж'],
    isPopular: false,
    color: 'bg-neutral-100 hover:bg-neutral-200 text-rose-600',
    borderColor: ''
  }, {
    title: 'Преміум',
    price: 'від 800 грн',
    features: ['3 години гри', '200 кульок', 'Повний комплект спорядження', '2 ігрові локації', 'Інструктаж та супровід', 'Фото з гри'],
    isPopular: true,
    color: 'bg-rose-600 hover:bg-rose-700 text-white',
    borderColor: 'ring-2 ring-orange-500'
  }, {
    title: 'VIP',
    price: 'від 1200 грн',
    features: ['4 години гри', '300 кульок', 'Преміум спорядження', 'Всі локації', 'Персональний інструктор', 'Фото та відео з гри', 'Пікнік після гри'],
    isPopular: false,
    color: 'bg-neutral-100 hover:bg-neutral-200 text-rose-600',
    borderColor: ''
  }];
  return <section id="services" className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-rose-600">
          Наші послуги
        </h2>
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-transform hover:-translate-y-1 border-t-4 border-rose-500">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-rose-600">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>)}
        </div>
        {/* Pricing Packages */}
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-orange-500">
          Пакети послуг
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => <div key={index} className={`bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:-translate-y-1 relative ${pkg.borderColor}`}>
              {pkg.isPopular && <div className="absolute top-0 right-0 bg-orange-500 text-white px-4 py-1 text-sm font-medium">
                  Популярний
                </div>}
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2 text-rose-600">
                  {pkg.title}
                </h4>
                <p className="text-2xl font-bold text-orange-500 mb-4">
                  {pkg.price}
                </p>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, idx) => <li key={idx} className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 mr-2 text-rose-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>)}
                </ul>
                <button className={`w-full py-3 rounded-lg font-medium transition-colors ${pkg.color}`}>
                  Обрати пакет
                </button>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Services;