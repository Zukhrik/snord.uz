import React from 'react'
import ReactModal from 'react-modal';

//style
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

            <div className="close-button">
                <button
                    onClick={closeModal}
                >X</button>
            </div>

            <div className="custom-modal-body">
                {
                    component
                }
            </div>

        </ReactModal>
    )
}