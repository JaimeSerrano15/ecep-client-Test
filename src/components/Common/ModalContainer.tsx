import SuccessModal from "../Modals/SuccessModal";

interface ModalProps {
    closeModal: any;
    children?: any;
}

const Modal = (props: ModalProps) => {
    const { closeModal, children } = props;
    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity">{children}</div>
                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <SuccessModal closeModal={closeModal} />
                </div>
        </div>
    );
}

export default Modal;
