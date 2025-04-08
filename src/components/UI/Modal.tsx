import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useModalContext } from "../../context/ModalContext";

interface Props {
  children: React.ReactNode;
}

const eventListener = "keydown";

export const Modal = ({ children }: Props) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const { state, setState } = useModalContext();

  const modalRoot = document.getElementById("modal");

  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setState(false);
      }
    };
    if (state) {
      document.addEventListener(eventListener, handleEsc);
    }

    return () => {
      document.removeEventListener(eventListener, handleEsc);
    };
  }, [setState, state]);

  if (!state || !modalRoot) {
    return null;
  }
  
  const closeModal = () => {
    setState(false);
  };

  return createPortal(
    <div
      className="bg-black/60 fixed inset-0 w-full min-h-screen z-50 overflow-hidden overflow-y-auto flex flex-col items-center justify-center "
      onClick={closeModal}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.2 }}
        className=""
        onClick={handleContentClick}
        ref={modalRef}
      >
        {children}
       
      </motion.div>
    </div>,
    modalRoot
  );
};
