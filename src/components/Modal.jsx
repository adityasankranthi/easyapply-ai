// src/components/Modal.jsx
import React, { useEffect } from 'react';
import { LoadingSpinner } from './Icons';

const Modal = ({ isOpen, onClose, title, content, isLoading }) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="sidebar-bg rounded-lg w-full max-w-2xl shadow-2xl border-strong transform transition-all scale-100"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <div className="flex justify-between items-center p-4 border-b border-strong">
          <h3 className="text-lg font-bold text-primary">{title}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-2xl">&times;</button>
        </div>
        <div className="bg-black p-6 rounded-b-lg max-h-[60vh] overflow-y-auto prose prose-invert prose-sm max-w-none">
          {isLoading ? (
            <div className="flex items-center justify-center p-8">
              <LoadingSpinner />
              <p className="ml-4 text-secondary">AI is thinking...</p>
            </div>
          ) : (
            <div dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, '<br />') }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;