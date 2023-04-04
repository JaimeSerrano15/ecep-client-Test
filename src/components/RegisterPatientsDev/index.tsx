// This form is going to be used to register patients from the current database.
// It will only be used in dev. Is not the actual register form for user (but it might be similar).
import { useState } from 'react';
import RegisterForm from './RegisterForm';
import { useGetMunicipios } from '../../../queries/municipios';
import { useGetHospitals } from '../../../queries/hospitals';
import { useCreatePatientMutation } from '../../../queries/patients';
import Modal from '../Common/ModalContainer';

const RegisterFormDev = () => {
    const [showModal, setShowModal] = useState({
        show: false,
        status: "",
    });
    const { data: municipalities = [] } = useGetMunicipios();
    const { data: hospitals = [] } = useGetHospitals();
    const createPatience = useCreatePatientMutation();

    const hideModal = () => setShowModal({
        show: false,
        status: "",
    })

    return (
        <div className={`pt-10 flex flex-col items-center  ${showModal.show ? 'bg-blue-300 bg-opacity-95' : ' bg-blue-300 bg-opacity-100'} transition-all`}>
            <h2 className="text-center text-3xl font-bold">Registrar nuevo paciente</h2>
            <RegisterForm
                municipalities={municipalities}
                hospitals={hospitals}
                createPatience={createPatience}
                showModal={setShowModal}
            />
            {
                showModal.show && (
                    <Modal 
                        closeModal={hideModal}
                    />
                )
            }
        </div>
    );
}

export default RegisterFormDev;