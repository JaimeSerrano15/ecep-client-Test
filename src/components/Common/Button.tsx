interface ButtonProps {
    className?: string;
    children?: string | React.ReactElement,
    type: "button" | "submit" | "reset" | undefined,
}

const Button = (props: ButtonProps) => {
    const { className, children, type } = props;
    return (
        <button type={type} className={`${className} p-2 border-2 bg-[#CAEBD5] rounded-2xl w-full py-4`}>
            {children}
        </button>
    )
}

export default Button;