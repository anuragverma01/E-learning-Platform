import React from 'react';

const Modal = ({ isVisible, onClose, children }:any) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg w-1/2">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-gray-700">&times;</button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
