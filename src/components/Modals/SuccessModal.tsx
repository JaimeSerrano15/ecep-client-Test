interface ModalProps {
    closeModal: any,
}

const SuccessModal = (props: ModalProps) => {
    const { closeModal } = props;
    return (
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <h3 className="text-lg font-bold leading-6 text-green-900" id="modal-title">Registro!</h3>
                    <div className="mt-2">
                        <p className="text-sm text-gray-500">Se ha registrado al paciente correctamente.</p>
                        <p className="text-sm text-gray-500">Esto es un nuevo cambio.</p>
                        <p className="text-sm text-gray-500">Esto es otro otro cambio.</p>
                    </div>
                    </div>
                </div>
                </div>
                <div className="flex justify-center my-2 w-full">
                    <button type="button" className="inline-flex justify-center w-full rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto" onClick={closeModal}>Entendido</button>
                </div>

            </div>
        </div> 
    );
}

export default SuccessModal;