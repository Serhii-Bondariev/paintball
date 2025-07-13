import { useState } from 'react';
import { MenuIcon, XIcon, Facebook, Instagram, Send as TelegramIcon } from 'lucide-react';

// Інтерфейс для пропсів
interface HeaderProps {
  onSocialClick: (link: string, name: string) => void;
}

const Header = ({ onSocialClick }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Головна', href: '#hero' },
    { name: 'Про нас', href: '#about' },
    { name: 'Послуги', href: '#services' },
    { name: 'Галерея', href: '#gallery' },
    { name: 'Контакти', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: <Facebook size={20} />, link: 'https://facebook.com' },
    { name: 'Instagram', icon: <Instagram size={20} />, link: 'https://instagram.com' },
    { name: 'Telegram', icon: <TelegramIcon size={20} />, link: 'https://t.me/paintball_club' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-stone-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/src/assets/logo.png"
            alt="Логотип пейнтбольного клубу"
            className="h-10 w-10 rounded-full mr-2 object-cover border-2 border-rose-600"
          />
          <h1 className="text-xl font-bold text-white-500">Пейнтбол Клуб <br/> - TRIDENT - </h1>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <a href={item.href} className="hover:text-rose-400 transition-colors">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-3 ml-4">
            {socialLinks.map((social) => (
              <button
                key={social.name}
                onClick={() => onSocialClick(social.link, social.name)}
                className="hover:text-orange-400 transition-colors"
                aria-label={social.name}
              >
                {social.icon}
              </button>
            ))}
          </div>
        </nav>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={toggleMenu} aria-label="Меню">
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-stone-800 py-4">
          <ul className="flex flex-col items-center space-y-3">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="hover:text-rose-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li className="flex space-x-5 pt-2">
              {socialLinks.map((social) => (
                <button
                  key={social.name}
                  onClick={() => {
                    onSocialClick(social.link, social.name);
                    setIsMenuOpen(false);
                  }}
                  className="hover:text-orange-400 transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </button>
              ))}
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;