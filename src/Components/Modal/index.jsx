import React from 'react'
import ReactModal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

ReactModal.setAppElement('#yourAppElement')

export const Modal = ({ modalIsOpen, setIsOpen, component }) => {

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <ReactModal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
        >
            {
                component
            }
        </ReactModal>
    )
}