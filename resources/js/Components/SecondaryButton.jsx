export default function SecondaryButton({
    type = "button",
    className = "",
    disabled,
    children,
    href,
    ...props
}) {
    const Button = href ? "a" : "button"; // Menentukan jenis elemen berdasarkan keberadaan properti href

    return (
        <Button
            {...props}
            type={type}
            href={href}
            className={
                `inline-flex w-fit justify-center items-center px-6 py-3 bg-[#FF6E07] rounded-full font-normal text-base text-white tracking-widest shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${
                    disabled && "opacity-25"
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </Button>
    );
}
