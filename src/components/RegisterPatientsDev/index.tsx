// This form is going to be used to register patients from the current database.
// It will only be used in dev. Is not the actual register form for user (but it might be similar).
import RegisterForm from './RegisterForm';
import { useGetMunicipios } from '../../../queries/municipios';
import { useGetHospitals } from '../../../queries/hospitals';
import { useCreatePatientMutation } from '../../../queries/patients';

const RegisterFormDev = () => {
    const { data: municipalities = [] } = useGetMunicipios();
    const { data: hospitals = [] } = useGetHospitals();
    const createPatience = useCreatePatientMutation();
    return (
        <div className="pt-10 flex flex-col items-center bg-gradient-to-r from-green-300 to-blue-300 ">
            <h2 className="text-blue-400 text-center text-3xl font-bold">Registrar nuevo paciente</h2>
            <RegisterForm
                municipalities={municipalities}
                hospitals={hospitals}
                createPatience={createPatience}
            />
        </div>
    );
}

export default RegisterFormDev;