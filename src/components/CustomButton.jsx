import React from 'react'

export const CustomButton = ({ 
    id=null,
    name,
    styles,
    type,
    onclick = null
 }

) => {
    return (
        
        <button 
            id={id}
            type={type}
            className={`focus:outline-none text-white ${styles} focus:ring-4 font-medium rounded-lg text-sm px-1 py-2.5 me-2 mb-2`}
            onClick={onclick}
            >
                { name }
        </button>

    )
}


