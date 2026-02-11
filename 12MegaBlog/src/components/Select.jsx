import React ,{useId} from "react";

function Select({
    options,
    label,
    className='',
    ...props
},ref){
    const id = useId();
    return(
        <div className= 'w-full'>
            {label && <label htmlFor={id} className="block text-sm font-medium text-gray-700"></label>}
            <select id={id} className={`block w-full p-2 border rounded-md ${className}`} ref={ref} {...props}>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default React.forwardRef(Select);