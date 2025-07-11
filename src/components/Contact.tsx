import React, { lazy } from 'react';
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon, FacebookIcon, InstagramIcon, Send as TelegramIcon } from 'lucide-react';
const Contact = ({
  onSocialClick
}) => {
  const handleSubmit = e => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Дякуємо за повідомлення! Ми зв'яжемося з вами найближчим часом.");
  };
  return <section id="contact" className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-rose-600">
          Контакти
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-rose-500">
            <h3 className="text-2xl font-semibold mb-6 text-rose-600">
              Зв'яжіться з нами
            </h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <MapPinIcon className="text-orange-500 mr-4 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-700">
                  вул. Лісова, 123, <br />
                  с. Зелене, Київська область
                </p>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="text-rose-500 mr-4 flex-shrink-0" size={20} />
                <p className="text-gray-700">+38 (050) 123-45-67</p>
              </div>
              <div className="flex items-center">
                <MailIcon className="text-orange-500 mr-4 flex-shrink-0" size={20} />
                <p className="text-gray-700">info@paintballclub.ua</p>
              </div>
              <div className="flex items-start">
                <ClockIcon className="text-rose-500 mr-4 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="text-gray-700">Пн-Пт: 10:00 - 19:00</p>
                  <p className="text-gray-700">Сб-Нд: 9:00 - 20:00</p>
                </div>
              </div>
            </div>
            <h4 className="text-lg font-semibold mb-3 text-rose-600">
              Слідкуйте за нами
            </h4>
            <div className="flex space-x-4">
              <button onClick={() => onSocialClick('https://facebook.com', 'Facebook')} className="bg-blue-100 hover:bg-blue-200 p-3 rounded-full transition-colors transform hover:scale-110" aria-label="Facebook">
                <FacebookIcon size={20} className="text-blue-600" />
              </button>
              <button onClick={() => onSocialClick('https://instagram.com', 'Instagram')} className="bg-pink-100 hover:bg-pink-200 p-3 rounded-full transition-colors transform hover:scale-110" aria-label="Instagram">
                <InstagramIcon size={20} className="text-pink-600" />
              </button>
              <button onClick={() => onSocialClick('https://t.me/paintball_club', 'Telegram')} className="bg-blue-100 hover:bg-blue-200 p-3 rounded-full transition-colors transform hover:scale-110" aria-label="Telegram">
                <TelegramIcon size={20} className="text-blue-500" />
              </button>
            </div>
          </div>
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-orange-500">
            <h3 className="text-2xl font-semibold mb-6 text-rose-600">
              Напишіть нам
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Ім'я
                </label>
                <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500" required />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 mb-2">
                  Телефон
                </label>
                <input type="tel" id="phone" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500" required />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Повідомлення
                </label>
                <textarea id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500" required></textarea>
              </div>
              <button type="submit" className="w-full bg-rose-600 hover:bg-rose-700 text-white py-3 rounded-lg font-medium transition-colors transform hover:scale-[1.02]">
                Надіслати
              </button>
            </form>
          </div>
        </div>
        {/* Map */}
        <div className="mt-12 rounded-lg overflow-hidden shadow-md h-80 border-4 border-rose-500">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d325516.3770455823!2d30.252511957031247!3d50.4016990999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2z0JrQuNGX0LIsIDAyMDAw!5e0!3m2!1suk!2sua!4v1625145220860!5m2!1suk!2sua" width="100%" height="100%" style={{
          border: 0
        }} allowFullScreen loading="lazy" title="Карта розташування"></iframe>
        </div>
      </div>
    </section>;
};
export default Contact;