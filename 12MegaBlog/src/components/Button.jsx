import React from "react";

function Button({
    children,
    type = "button",
    bgColor = "bg-blue-500",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button
            type={type}
            className={`
                px-5 py-2
                rounded-xl
                font-semibold
                transition-all duration-300
                ${bgColor}
                ${textColor}
                ${className}
            `}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;
