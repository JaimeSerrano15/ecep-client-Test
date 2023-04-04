import { useState } from 'react';
import Select from 'react-select';
import Input from '../Common/Input';
import Button from '../Common/Button';

type SelectType = {
    value: number,
    label: string,
}

interface Register {
    municipalities: any[],
    hospitals: any[],
    createPatience: any,
    showModal: any,
}

interface FormProps {
    name: string,
    last_names: string,
    birthday: string,
    register_date: string,
    father: string,
    mother: string,
    hospital: SelectType,
    municipality: SelectType,
    referred_by: string,
    sex: SelectType,
    phone: string,
}

interface InputProps {
    id: number,
    name: keyof FormProps,
    type: string,
    placeholder: string,
    label: string,
    options?: any[],
}

const RegisterForm = (props: Register) => {
    const [values, setValues] = useState<FormProps>({
        name: "",
        last_names: "",
        birthday: "",
        register_date: "",
        father: "",
        mother: "",
        hospital: { value: 0, label: "" },
        municipality: { value: 0, label: "" },
        referred_by: "",
        sex: { value: 0, label: "" },
        phone: "",
    })

    const resetForm = () => setValues({
        name: "",
        last_names: "",
        birthday: "",
        register_date: "",
        father: "",
        mother: "",
        hospital: { value: 0, label: "" },
        municipality: { value: 0, label: "" },
        referred_by: "",
        sex: { value: 0, label: "" },
        phone: "",
    });

    const { municipalities, hospitals, createPatience, showModal } = props;

    // inputs info
    const inputs: InputProps[] = [
        {
            id: 1,
            name: "name",
            placeholder:"Nombres...",
            type: "text",
            label: "Nombres del paciente:",
        },
        {
            id: 2,
            name: "last_names",
            placeholder:"Apellidos...",
            type: "text",
            label: "Apellidos del paciente:",
        },
        {
            id: 3,
            name: "birthday",
            placeholder:"Fecha de nacimiento...",
            type: "date",
            label: "Fecha de nacimiento:",
        },
        {
            id: 4,
            name: "register_date",
            placeholder:"Fecha de registro...",
            type: "date",
            label: "Fecha de registro:",
        },
        {
            id: 5,
            name: "municipality",
            placeholder:"Municipio...",
            type: "select",
            label: "Municipio:",
            options: municipalities.map((municipality) => ({ value: municipality.id_municipio, label: municipality.nombre_municipio })),
        },
        {
            id: 6,
            name: "hospital",
            placeholder:"Hospital...",
            type: "select",
            label: "Hospital de nacimiento:",
            options: hospitals.map((hospital) => ({ value: hospital.id_hospital, label: hospital.nombre_hospital })),
        },
        {
            id: 7,
            name: "sex",
            placeholder:"Sexo...",
            type: "select",
            label: "Sexo:",
            options: [
                { value: 1, label: "M"},
                { value: 2, label: "F"},
            ],
        },
        {
            id: 8,
            name: "phone",
            placeholder:"Teléfono...",
            type: "text",
            label: "Teléfono:",
        },
        {
            id: 9,
            name: "father",
            placeholder:"Padre...",
            type: "text",
            label: "Nombre del padre:",
        },
        {
            id: 10,
            name: "mother",
            placeholder:"Madre...",
            type: "text",
            label: "Nombre de la madre:",
        },
        {
            id: 11,
            name: "referred_by",
            placeholder:"Referido por...",
            type: "text",
            label: "Referido por:",
        },
    ];

    console.log({ values });

    const handleSubmitForm = (e: any) => {
        e.preventDefault();
        createPatience.mutate({
            nombre_paciente: values.name,
            apellido_paciente: values.last_names,
            fecha_nacimiento: values.birthday,
            fecha_registro: values.register_date,
            nombre_padre: values.father,
            nombre_madre: values.mother,
            id_hospital_nacimiento: values.hospital.value,
            id_municipio: values.municipality.value,
            persona_refiere: values.referred_by,
            sexo: values.sex.label,
            telefono_contacto: values.phone,
        }, {
            onSuccess: () => {
                console.log('Se ha creado con éxito');
                showModal({
                    show: true,
                    status: 'success',
                });
                resetForm()
            },
            onError: () => {
                console.log("Something went wrong");
                showModal({
                    show: true,
                    status: 'error',
                });
            }
        })
    }    

    const onChange = (e: any) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    }

    return (
        <form
            className="w-1/4 md:w-1/2 lg:w-1/3 my-6 border-1 shadow-xl rounded-2xl p-8 bg-white"
            onSubmit={handleSubmitForm}
        >
            {
            inputs.map((input) => input.type !== 'select' ? (
                <Input 
                    key={input.id}
                    {...input}
                    value={values[input.name]}
                    onChange={onChange}
                />
            ) : (
                <div className="my-2"  key={input.id}>
                    <label className="font-semibold">{input.label}</label>
                    <Select 
                        options={input.options}
                        name={input.name}
                        value={values.name}
                        styles={{
                            control: (baseStyles, state) => ({
                            ...baseStyles,
                            padding: '12px',
                            borderRadius: '10px',
                            borderColor: 'rgb(229 231 235)',
                            }),
                        }}
                        onChange={(value, action) => onChange({
                            target: {
                                name: action.name,
                                value: value,
                            }
                        })}
                    />
                </div>
            ))
            }
            <Button type="submit" className="mt-4"> Registrar </Button>
        </form>
    )
}

export default RegisterForm;