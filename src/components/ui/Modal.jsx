import { createPortal } from "react-dom";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 bg-primary/50 flex items-center justify-center z-50 backdrop-blur-xs">
      <div className="bg-white rounded-lg p-10 w-[95%] md:w-[700px] shadow-lg relative">
        <button
          className="absolute top-5 right-6 text-gray-500 hover:text-gray-800 text-xl cursor-pointer"
          onClick={onClose}
        >
          ✕
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
