import { useEffect, useRef } from "react";

interface ModalProps {
    message: string;
    isOpen: boolean;
    close: () => void;
}

export function Modal({message, isOpen, close}: ModalProps) {
    const ref = useRef<HTMLDialogElement>(null);

    useEffect(() => {
      if (ref.current) {
        if (isOpen) {
          ref.current.showModal();
        } else {
          ref.current.close();
        }
      }
      }, [isOpen]);

    return (
        <dialog ref={ref}>
            <h1>{message}</h1>
            <button className="btn-close-modal" onClick={close}>Fermer</button>
        </dialog>
    );
}