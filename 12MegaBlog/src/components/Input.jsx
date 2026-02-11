import React, { useId } from "react";


const Input = React.forwardRef(function Input({
    label,
    type = "text",
    className = '',
    ...props
}, ref) {
    const id = useId();

    return (
        <div className="w-full">
            {label && <label
                htmlFor={id}
                className="block text-sm font-medium text-gray-700">
                {label}
            </label>}
            <input
                type={type}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
                ref={ref}/*gives ref to forward ref()*/
                {...props}
                id={id}
            />
        </div>
    )
})

export default Input;