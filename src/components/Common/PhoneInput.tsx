import { ChangeEventHandler } from 'react';
import InputMask from 'react-input-mask';

interface PhoneInputProps {
    id: number,
    label: string,
    value: any,
    onChange: ChangeEventHandler<HTMLInputElement>
}

const PhoneInput = (props: PhoneInputProps) => {
    const { label, onChange, id, ...inputProps } = props;
    return (
        <div>
            <label className="font-semibold">{label}</label>
            <InputMask 
                mask='9999-9999' 
                {...inputProps}
                className="h-8 p-8 my-2 w-full border-2 border-gray-200 rounded-lg"
                onChange={onChange}>
            </InputMask>
        </div>
    );
}

export default PhoneInput;
