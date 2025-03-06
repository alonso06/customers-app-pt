import React, { useEffect, useState } from 'react'
import { TitleForm } from '../TitleForm'
import { CustomButton } from '../CustomButton'
import { createCustomerType } from '../../helpers/fetchApi';
import { useLocation } from 'react-router-dom';

export const TypeCustomerForm = () => {

    const [customerType, setCustomerType] = useState({
        'id': null,
        'name': '',
        'state': true
    });
    
    const location = useLocation();
    
    const fillFields = () => {
        const objCustomerType = location.state.customerTypeData

        setCustomerType(objCustomerType);

    }
    
    useEffect(()=>fillFields(),[]);

    // fillFields();


    const handleChange = (e) => {

        const { name, value, type, checked } = e.target;

        setCustomerType({
            ...customerType,
            [name]: type === 'checkbox'
                ? checked
                : value
        })
    }

    const handleSumbit = async (e) => {
        e.preventDefault();
        const {body} = await createCustomerType(
            JSON.stringify(customerType));

        console.log(body);

    }



    return (<>

        <TitleForm title={'Agregar tipo de cliente'} />
        <form
            className=''

            onSubmit={handleSumbit}
        >


            <div className="">
                <div className="">
                    <label
                        className="block text-gray-500 font-bold"
                        for="name">
                        Nombre
                    </label>
                </div>
                <div className="">
                    <input

                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-auto py-2 px-"
                        id="name"
                        name='name'
                        type="text"
                        value={customerType.name}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="">
                <div className="">
                    <input
                        id="default-checkbox"
                        name='state'
                        type='checkbox'
                        className="w-4 h-4 my-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        checked={customerType.state}
                        onChange={handleChange}
                    />

                    <label for="default-checkbox" class="ms-2 font-bold text-gray-500">Estado</label>
                </div>

            </div>

            <CustomButton
                name={'Guardar'}
                styles={"bg-green-700 hover:bg-green-800"}
                type={'submit'}
            />

            <CustomButton
                name={'Volver'}
                styles={"bg-blue-700 hover:bg-blue-800"}
                type={'button'}
            />
        </form>

    </>)

}
