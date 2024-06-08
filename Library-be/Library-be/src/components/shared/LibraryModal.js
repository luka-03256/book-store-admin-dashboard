import Modal from "bootstrap/js/src/modal";

export const LibraryModal = ({isOpen, children, onCloseModal}) => {
    //console.log(isOpen);
    return (
        <Modal open={isOpen} onClose={onCloseModal} center>
            {children}
        </Modal>
    );
}