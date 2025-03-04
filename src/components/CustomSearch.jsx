import React from 'react'

export const CustomSearch = () => {
    return (
        <form >
            <input
                type="text"
                placeholder="Escribir un nombre"
                className='border-2 border-gray-200 rounded w-full py-2 px-2'
                // onChange={onChange}
                // value={}
            />
        </form>
    )
}
