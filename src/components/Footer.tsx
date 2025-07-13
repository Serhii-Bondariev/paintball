
import { Facebook, Instagram, PhoneIcon, MailIcon, MapPinned, Send as TelegramIcon } from 'lucide-react';

interface FooterProps {
  onSocialClick: (link: string, name: string) => void;
}
const Footer = ({
  onSocialClick
} : FooterProps) => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-stone-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center mb-4">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG_o6mLa71brE5NXmNje44KrTpY2sd1_xVpQ&s" alt="Логотип пейнтбольного клубу" className="h-10 w-10 rounded-full mr-2 object-cover border-2 border-rose-500" />
              <h2 className="text-xl font-bold text-rose-500">Пейнтбол Клуб <br/> - TRIDENT - </h2>
            </div>
            <p className="text-gray-300 mb-4">
              Активний відпочинок на природі для всієї родини, друзів та колег.
              Пейнтбольні ігри в мальовничому лісі та на території покинутого
              піонерського табору.
            </p>
            <div className="flex space-x-4">
              <button onClick={() => onSocialClick('https://facebook.com', 'Facebook')} className="hover:text-blue-400 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </button>
              <button onClick={() => onSocialClick('https://instagram.com', 'Instagram')} className="hover:text-pink-400 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </button>
              <button onClick={() => onSocialClick('https://t.me/paintball_club', 'Telegram')} className="hover:text-blue-400 transition-colors" aria-label="Telegram">
                <TelegramIcon size={20} />
              </button>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-rose-500">
              Швидкі посилання
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-gray-300 hover:text-rose-400 transition-colors">
                  Головна
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-rose-400 transition-colors">
                  Про нас
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-rose-400 transition-colors">
                  Послуги
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-300 hover:text-rose-400 transition-colors">
                  Галерея
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-rose-400 transition-colors">
                  Контакти
                </a>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-500">
              Контактна інформація
            </h3>
            <address className="not-italic  text-gray-300 space-y-2">

              <div className="flex items-center">
                <MapPinned className="mr-2" size={20} />
                <p>смт. Пісківка, Київська область</p>
              </div>
              <a href="tel:+380979976869" className="flex items-center text-gray-300 hover:text-rose-400 transition-colors"><PhoneIcon className="mr-2" size={16} /> +38 (097) 997 68 69</a>
              <a href='mailto:paintball.piskivka@gmail.com' className="flex items-center owerflow-hidden text-gray-300 hover:text-rose-400 transition-colors"><MailIcon className="mr-2" size={16} />paintball.piskivka@gmail.com</a>
              {/* <p>Email: paintball.piskivka@gmail.com</p> */}
              {/* <p>Пн-Пт: 10:00 - 19:00</p>
              <p>Сб-Нд: 9:00 - 19:00</p> */}
            </address>
          </div>
        </div>
        <div className="border-t border-stone-800 mt-8 pt-6 text-center text-gray-300">
          <p>
            &copy; {currentYear}{' '}
            <span className="text-rose-500">Пейнтбол Клуб - TRIDENT - </span>. Усі права
            захищено.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;