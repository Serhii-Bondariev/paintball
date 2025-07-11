import React from 'react';
import { XIcon, FacebookIcon, InstagramIcon, Send as TelegramIcon } from 'lucide-react';
const SocialModal = ({
  isOpen,
  onClose,
  socialLink,
  socialName
}) => {
  if (!isOpen) return null;
  const getSocialIcon = () => {
    switch (socialName) {
      case 'Facebook':
        return <FacebookIcon size={40} className="text-blue-600" />;
      case 'Instagram':
        return <InstagramIcon size={40} className="text-pink-600" />;
      case 'Telegram':
        return <TelegramIcon size={40} className="text-blue-500" />;
      default:
        return null;
    }
  };
  const handleConfirm = () => {
    window.open(socialLink, '_blank');
    onClose();
  };
  return <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative border-t-4 border-rose-600">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-rose-600" aria-label="Закрити">
          <XIcon size={20} />
        </button>
        <div className="text-center mb-6">{getSocialIcon()}</div>
        <h3 className="text-2xl font-bold text-center mb-4 text-rose-600">
          Перехід на {socialName}
        </h3>
        <p className="text-gray-600 text-center mb-6">
          Ви дійсно бажаєте перейти на сторінку нашого клубу в соціальній мережі{' '}
          {socialName}?
        </p>
        <div className="flex space-x-4">
          <button onClick={onClose} className="flex-1 py-2 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-100 transition-colors">
            Скасувати
          </button>
          <button onClick={handleConfirm} className="flex-1 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-lg font-medium transition-colors">
            Перейти
          </button>
        </div>
      </div>
    </div>;
};
export default SocialModal;