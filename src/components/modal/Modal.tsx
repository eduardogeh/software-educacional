import React from 'react';
import './estilos.scss';

export default function Modal({
                                  isOpen,
                                  onClose,
                                  children,
                                  closeDisabled = false,
                              }: {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    closeDisabled?: boolean;
}) {
    if (!isOpen) return null;

    return (
        <div
            className="modal-overlay"
            onClick={() => {
                if (!closeDisabled) onClose();
            }}
        >
            <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="modal-close"
                    disabled={closeDisabled}
                    onClick={onClose}
                >
                    ×
                </button>
                {children}
            </div>
        </div>
    );
}
