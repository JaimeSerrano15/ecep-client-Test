import { ChangeEventHandler } from "react";

interface InputProps {
    id: number,
    value: any,
    label: string,
    onChange: ChangeEventHandler<HTMLInputElement>
}

const Input = (props: InputProps) => {
    const { label, onChange, id, ...inputProps } = props;
    return (
        <div>
            <label className="font-semibold">{label}</label>
            <input
                {...inputProps}
                className="h-8 p-8 my-2 w-full border-2 border-gray-200 rounded-lg"
                onChange={onChange}
            />
        </div>
    );
}

export default Input;
