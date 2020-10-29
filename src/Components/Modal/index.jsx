import React from 'react'
import ReactModal from 'react-modal';

import './modal.css'

ReactModal.setAppElement('#yourAppElement')

export const Modal = ({ modalIsOpen, setIsOpen, component }) => {

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <ReactModal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            className="custom-modal"
            overlayClassName="custom-modal-overlay"
        >
            <div className="custom-modal-body">
                {
                    component
                }
            </div>

        </ReactModal>
    )
}