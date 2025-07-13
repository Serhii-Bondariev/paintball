import { useState } from 'react';
import { XIcon } from 'lucide-react';

// Інтерфейс для об’єктів зображень
interface GalleryImage {
  src: string;
  alt: string;
}

const Gallery = () => {
  // Типізація стану: GalleryImage або null
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const galleryImages: GalleryImage[] = [
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmK5dt9RdpCFFFFv_EuY9Pmkly5y4-94FcRQ&s',
      alt: 'Гравці в пейнтбол у лісі',
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmyzk_WWdmKfhmQEMZ6H4q83i88WQ_AUaIUg&s',
      alt: 'Пейнтбольна гра біля озера',
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-XReDyXOuJrjYQgflQnYp8R-0b-_tlPKvSA&s84-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Команда після гри',
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTI5uIpsB9lEvjz1KdlgJ_dgDSC_hd2z6lvA&s',
      alt: 'Пейнтбольне спорядження',
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfKNKotlmBFM73qIPaKbE7cVl16tYIV8Kw8g&s',
      alt: 'Гра в покинутому таборі',
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0XGWwcswbEZQEWo1dkPyiSgCsXZDJc0sC3Q&s',
      alt: 'Ліс біля пейнтбольного клубу',
    },
    {
      src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/cc/cd/93/attack.jpg?w=1400&h=800&s=1',
      alt: 'Корпоративна гра в пейнтбол',
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD5tAwPfvMwnh5OpQZRIznMqvLhKvDMQgiAw&s',
      alt: 'Озеро біля ігрової території',
    },
  ];

  // Типізація параметра image
  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-rose-600">
          Галерея
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages
            .filter((image) => image.src) // Фільтруємо зображення з порожнім src
            .map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg shadow-md cursor-pointer transition-transform hover:scale-105 border-2 border-transparent hover:border-rose-500"
                onClick={() => openModal(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
        </div>
        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4">
            <div className="relative max-w-4xl w-full">
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-rose-400"
                aria-label="Закрити"
              >
                <XIcon size={24} />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[80vh] object-contain rounded border-4 border-rose-600"
              />
              <p className="text-white text-center mt-4">{selectedImage.alt}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;