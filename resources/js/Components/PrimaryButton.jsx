export default function PrimaryButton({
    className = "",
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center px-6 py-3  outline  outline-[#FF6E07] rounded-full font-semibold text-base  text-[#FF6E07] tracking-widest hover:bg-[#FF6E07] hover:text-[#fff] focus:bg-[#FF6E07] active:bg-[#FF6E07] focus:outline-none focus:ring-2 focus:ring-[#FF6E07] focus:ring-offset-2 transition ease-in-out duration-150 ${
                    disabled && "opacity-25"
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
