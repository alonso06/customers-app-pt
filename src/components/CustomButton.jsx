import React from 'react'

export const CustomButton = ({ 
    name,
    styles
 }

) => {
    return (
        <button 
            type="button" 
            className={`focus:outline-none text-white ${styles} focus:ring-4 font-medium rounded-lg text-sm px-1 py-2.5 me-2 mb-2`}>
                { name }
        </button>



    )
}


