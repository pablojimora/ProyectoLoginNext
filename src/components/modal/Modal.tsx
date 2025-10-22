import React from 'react'
import { MiButton } from '../button/Button';


export interface ModalProps {
    isOpen?: boolean;
    onClose?: () => void;
    onConfirm?: () => void;
    title: string;
    children:React.ReactNode;
}
export const Modal = ({isOpen, onClose, onConfirm, title, children}:ModalProps) => {
  return (
    <div>
        {isOpen && (
            <div className="modal-overlay">
                <div className="modal-content">
                    <h2>{title}</h2>
                        {children}
                    <div className="modal-actions">
                        <MiButton
                            textButton='Cancelar'
                            click={onClose}
                            variant="secondary"
                            size="md"
                        />
                        <MiButton
                            textButton='Confirmar'
                            click={onConfirm}
                            variant="danger"
                            size="md"
                        />
                    </div>
                </div>
            </div>
        )}
    </div>
  )
}
