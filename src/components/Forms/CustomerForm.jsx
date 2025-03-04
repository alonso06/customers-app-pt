import React from 'react'
import { TitleForm } from '../TitleForm'
import { CustomButton } from '../CustomButton'


export const CustomerForm = () => {
    return (<>

        <TitleForm title={'Agregar cliente'} />
        <form
            className=''
            action="">


            <div className="">
                <div className="">
                    <label 
                        className="block text-gray-500 font-bold" 
                        for="first-name">
                        Nombres
                    </label>
                </div>
                <div className="">
                    <input 
                        
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-auto py-2 px-2" 
                        id="first-name"
                        type="text" 
                    />
                </div>
            </div>

            <div className="">
                <div className="">
                    <label 
                        className="block text-gray-500 font-bold" 
                        for="last-name">
                        Apellidos
                    </label>
                </div>
                <div className="">
                    <input 
                        
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-auto py-2 px-2" 
                        id="last-name"
                        type="text" 
                    />
                </div>
            </div>

            <div className="">
                <div className="">
                    <label 
                        className="block text-gray-500 font-bold" 
                        for="type-customer-id">
                        Tipo de cliente
                    </label>
                </div>
                <div className="">
                    <select 
                        className='appearance-none rounded leading-tight px-4 border border-gray-200 bg-gray-200'
                        name="" 
                        id="type-customer-id"
                    >
                    <option value="">Test</option>    
                    </select>
                </div>
            </div>

            <div className="">
                <div className="">
                    <label 
                        className="block text-gray-500 font-bold" 
                        for="gender">
                        Sexo
                    </label>
                </div>
                <div className="">
                    <select 
                        className='appearance-none rounded leading-tight px-4 border border-gray-200 bg-gray-200'
                        name="" 
                        id="gender"
                    >
                    <option value="">Masculino</option>    
                    </select>
                </div>
            </div>

            <div className="">
                <div className="">
                    <input 
                        id="default-checkbox" 
                        type='checkbox'
                        value="" 
                        className="w-4 h-4 my-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    
                    />
                    
                    <label for="default-checkbox" class="ms-2 font-bold text-gray-500">Estado</label>
                </div>
               
            </div>

            <div className="">
                <div className="">
                    <label 
                        className="block text-gray-500 font-bold" 
                        for="birthdate">
                        Fecha de nacimiento
                    </label>
                </div>
                <div className="">
                    <input 
                        
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-auto py-2 px-" 
                        id="birthdate"
                        type="date" 
                    />
                </div>
            </div>
            
        </form>
        <CustomButton 
            name={'Guardar'}
            styles={"bg-green-700 hover:bg-green-800"}
         />

        <CustomButton 
            name={'Volver'}
            styles={"bg-blue-700 hover:bg-blue-800"}
         />

    </>)

}
