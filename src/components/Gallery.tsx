import React, { useState } from 'react';
import { XIcon } from 'lucide-react';
const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const galleryImages = [{
    src: 'https://images.unsplash.com/photo-1598744609005-2d569266d40d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    alt: 'Гравці в пейнтбол у лісі'
  }, {
    src: 'https://images.unsplash.com/photo-1544717305-996b815c338c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    alt: 'Пейнтбольна гра біля озера'
  }, {
    src: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    alt: 'Команда після гри'
  }, {
    src: 'https://images.unsplash.com/photo-1506126944674-00c6c192e0a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    alt: 'Пейнтбольне спорядження'
  }, {
    src: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    alt: 'Гра в покинутому таборі'
  }, {
    src: 'https://images.unsplash.com/photo-1527856263669-12c3a0af2aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    alt: 'Ліс біля пейнтбольного клубу'
  }, {
    src: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    alt: 'Корпоративна гра в пейнтбол'
  }, {
    src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    alt: 'Озеро біля ігрової території'
  }];
  const openModal = image => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };
  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };
  return <section id="gallery" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-rose-600">
          Галерея
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => <div key={index} className="overflow-hidden rounded-lg shadow-md cursor-pointer transition-transform hover:scale-105 border-2 border-transparent hover:border-rose-500" onClick={() => openModal(image)}>
              <img src={image.src} alt={image.alt} className="w-full h-64 object-cover" />
            </div>)}
        </div>
        {/* Image Modal */}
        {selectedImage && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4">
            <div className="relative max-w-4xl w-full">
              <button onClick={closeModal} className="absolute -top-12 right-0 text-white hover:text-rose-400" aria-label="Закрити">
                <XIcon size={24} />
              </button>
              <img src={selectedImage.src} alt={selectedImage.alt} className="w-full h-auto max-h-[80vh] object-contain rounded border-4 border-rose-600" />
              <p className="text-white text-center mt-4">{selectedImage.alt}</p>
            </div>
          </div>}
      </div>
    </section>;
};
export default Gallery;