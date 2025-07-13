// import { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon, FacebookIcon, InstagramIcon, Send as TelegramIcon, Loader2Icon } from 'lucide-react';
import { IMaskInput } from 'react-imask';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

// Інтерфейс для пропсів
interface ContactProps {
  onSocialClick: (link: string, name: string) => void;
}

// Інтерфейс для помилок Formspree
interface SubmissionError {
  code: string;
  message: string;
  field?: string;
}

// Дані про пакети
const packages = [
  {
    title: 'Стандарт',
    features: ['2 години гри', '100 кульок', 'Базове спорядження', '1 ігрова локація', 'Інструктаж'],
  },
  {
    title: 'Преміум',
    features: ['3 години гри', '200 кульок', 'Повний комплект спорядження', '2 ігрові локації', 'Інструктаж та супровід', 'Фото з гри'],
  },
  {
    title: 'VIP',
    features: ['4 години гри', '300 кульок', 'Преміум спорядження', 'Всі локації', 'Персональний інструктор', 'Фото та відео з гри', 'Пікнік після гри'],
  },
];

const Contact = ({ onSocialClick }: ContactProps) => {
  const [state, handleSubmit] = useForm('myzpgeoj');
  const [phone, setPhone] = useState<string>('');
  const [searchParams, setSearchParams] = useSearchParams();
  const initialPackage = searchParams.get('package') || '';
  const [selectedPackage, setSelectedPackage] = useState<string>(initialPackage);
  const initialMessage = searchParams.get('message') || (selectedPackage ? `Я хочу замовити пакет ${selectedPackage}: ${packages.find(p => p.title === selectedPackage)?.features.join(', ')}` : '');
  const [message, setMessage] = useState<string>(initialMessage);

  // Локальна валідація телефону
  const phoneError = !/^\+38\s?\(\d{3}\)\s?\d{3}-\d{2}-\d{2}$/.test(phone) && phone
    ? 'Телефон має бути у форматі +38 (XXX) XXX-XX-XX'
    : '';

  // Оновлення повідомлення при виборі пакету
  useEffect(() => {
    if (selectedPackage) {
      const pkg = packages.find(p => p.title === selectedPackage);
      if (pkg) {
        setMessage(`Я хочу замовити пакет ${pkg.title}: ${pkg.features.join(', ')}`);
        setSearchParams({ package: selectedPackage, message: `Я хочу замовити пакет ${pkg.title}: ${pkg.features.join(', ')}` });
      }
    } else {
      setMessage('');
      setSearchParams({});
    }
  }, [selectedPackage, setSearchParams]);

  // Очищення форми після успішної відправки
  const handleFormReset = () => {
    const form = document.querySelector('form');
    if (form) form.reset();
    setPhone('');
    setMessage('');
    setSelectedPackage('');
    setSearchParams({});
  };

  // Обробка клавіатурної навігації
  const handleKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === 'Enter' && e.target instanceof HTMLInputElement) {
      e.preventDefault();
      const form = e.currentTarget;
      form.requestSubmit();
    }
  };

  // Автофокус на поле імені
  useEffect(() => {
    const nameInput = document.getElementById('name');
    if (nameInput) nameInput.focus();
  }, []);

  // Прокрутка до форми при завантаженні з параметром package
  useEffect(() => {
    if (searchParams.get('package')) {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [searchParams]);

  // Перевірка помилок для конкретного поля
  const getFieldError = (field: string) => {
    return Array.isArray(state.errors) ? state.errors.find((err: SubmissionError) => err.field === field)?.message : undefined;
  };

  return (
    <section id="contact" className="py-16 bg-neutral-100">
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
                <p className="text-gray-700">смт. Пісківка, Київська область</p>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="text-rose-500 mr-4 flex-shrink-0" size={20} />
                <p className="text-gray-700">+38 (097) 997-68-69</p>
              </div>
              <div className="flex items-center">
                <MailIcon className="text-orange-500 mr-4 flex-shrink-0" size={20} />
                <p className="text-gray-700">trident4club@ukr.net</p>
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
              <button
                onClick={() => onSocialClick('https://facebook.com', 'Facebook')}
                className="bg-blue-100 hover:bg-blue-200 p-3 rounded-full transition-colors transform hover:scale-110"
                aria-label="Facebook"
              >
                <FacebookIcon size={20} className="text-blue-600" />
              </button>
              <button
                onClick={() => onSocialClick('https://instagram.com', 'Instagram')}
                className="bg-pink-100 hover:bg-pink-200 p-3 rounded-full transition-colors transform hover:scale-110"
                aria-label="Instagram"
              >
                <InstagramIcon size={20} className="text-pink-600" />
              </button>
              <button
                onClick={() => onSocialClick('https://t.me/paintball_club', 'Telegram')}
                className="bg-blue-100 hover:bg-blue-200 p-3 rounded-full transition-colors transform hover:scale-110"
                aria-label="Telegram"
              >
                <TelegramIcon size={20} className="text-blue-500" />
              </button>
            </div>
          </div>
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-orange-500">
            <h3 className="text-2xl font-semibold mb-6 text-rose-600">
              Напишіть нам
            </h3>
            <form onSubmit={(e) => handleSubmit(e).then(() => handleFormReset())} onKeyDown={handleKeyDown} className="animate-fade-in">
              <div className="mb-4">
                <label htmlFor="package" className="block text-gray-700 mb-2">
                  Оберіть пакет
                </label>
                <select
                  id="package"
                  name="package"
                  value={selectedPackage}
                  onChange={(e) => setSelectedPackage(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 border-gray-300 focus:ring-rose-500"
                  aria-describedby="package-description"
                >
                  <option value="">Оберіть пакет</option>
                  {packages.map((pkg) => (
                    <option key={pkg.title} value={pkg.title}>
                      {pkg.title}
                    </option>
                  ))}
                </select>
                <p id="package-description" className="text-gray-500 text-sm mt-1">
                  Оберіть пакет, щоб автоматично заповнити деталі замовлення
                </p>
              </div>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Ім'я
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                  placeholder="Введіть ваше ім'я"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                    getFieldError('name') ? 'border-red-500' : 'border-gray-300 focus:ring-rose-500'
                  }`}
                  required
                  aria-describedby={getFieldError('name') ? 'name-error' : undefined}
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  placeholder="Введіть ваш email"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                    getFieldError('email') ? 'border-red-500' : 'border-gray-300 focus:ring-rose-500'
                  }`}
                  required
                  aria-describedby={getFieldError('email') ? 'email-error' : undefined}
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 mb-2">
                  Телефон
                </label>
                <IMaskInput
                  mask="+38 (000) 000-00-00"
                  value={phone}
                  onAccept={(value: string) => setPhone(value)}
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+38 (XXX) XXX-XX-XX"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                    phoneError || getFieldError('phone') ? 'border-red-500' : 'border-gray-300 focus:ring-rose-500'
                  }`}
                  required
                  aria-describedby={phoneError || getFieldError('phone') ? 'phone-error' : undefined}
                />
                {phoneError && (
                  <p id="phone-error" className="text-red-500 text-sm mt-1">
                    {phoneError}
                  </p>
                )}
                <ValidationError
                  prefix="Phone"
                  field="phone"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Повідомлення
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Введіть ваше повідомлення"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                    getFieldError('message') ? 'border-red-500' : 'border-gray-300 focus:ring-rose-500'
                  }`}
                  required
                  aria-describedby={getFieldError('message') ? 'message-error' : undefined}
                ></textarea>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-rose-600 hover:bg-rose-700 text-white py-3 rounded-lg font-medium transition-colors transform hover:scale-[1.02] disabled:opacity-50 flex items-center justify-center"
                disabled={state.submitting || !!phoneError}
                aria-label="Надіслати форму"
              >
                {state.submitting ? (
                  <>
                    <Loader2Icon className="animate-spin mr-2" size={20} />
                    Відправлення...
                  </>
                ) : (
                  'Надіслати'
                )}
              </button>
              {state.succeeded && (
                <div
                  className="mt-4 p-4 rounded-md text-center animate-fade-in bg-green-100 text-green-800"
                  role="alert"
                  aria-live="polite"
                >
                  Дякуємо за повідомлення! Ми зв’яжемося з вами найближчим часом.
                </div>
              )}
              {Array.isArray(state.errors) && state.errors.length > 0 && !state.succeeded && (
                <div
                  className="mt-4 p-4 rounded-md text-center animate-fade-in bg-red-100 text-red-800"
                  role="alert"
                  aria-live="polite"
                >
                  Будь ласка, виправте помилки у формі
                </div>
              )}
            </form>
          </div>
        </div>
        {/* Map */}
        <div className="mt-12 rounded-lg overflow-hidden shadow-md h-80 border-4 border-rose-500">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2532.392139688678!2d29.59663!3d50.71430!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTAuNzE0MzAsIDI5LjU5ODYз!5e0!3m2!1suk!2sua!4v1720975080000!5m2!1suk!2sua"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Карта розташування"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;