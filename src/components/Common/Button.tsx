interface ButtonProps {
    className?: string;
    children?: string | React.ReactElement,
    type: "button" | "submit" | "reset" | undefined,
    disabled?: any,
}

const Button = (props: ButtonProps) => {
    const { className, children, type, disabled } = props;
    console.log({ disabled });
    return (
        <button type={type} disabled={disabled} className={`${className} p-2 border-2 bg-[#CAEBD5] rounded-2xl w-full py-4`}>
            {children}
        </button>
    )
}

export default Button;