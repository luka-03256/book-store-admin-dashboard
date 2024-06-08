import React from 'react';
import 'react-responsive-modal/styles.css';
import {Modal} from 'react-responsive-modal';

export const LibraryModal = ({isOpen, children, onCloseModal}) => {
    return (
        <Modal open={isOpen} onClose={onCloseModal} center>
            {children}
        </Modal>
    );
};