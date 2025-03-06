import { Link, useNavigate } from "react-router-dom"
import { deleteCustomerType, getCustomerTypeById, unsubscribeCustomerType } from "../helpers/fetchApi"
import { useGetCustomersType } from "../hooks/useGetCustomersType"
import { CustomButton } from "./CustomButton"

export const TableView = () => {
    
    const navigate = useNavigate();
    
    const { customersT,
        setCustomersT,
        isLoading,
        setIsLoading
    } = useGetCustomersType()

    const handleDeleteCustomerType = async (e) => {
        setIsLoading(true);
        const customerTypeId = parseInt(e.target.id);
        const response = await deleteCustomerType(
            customerTypeId);

        if (response) {
            setIsLoading(false);
            const newCustomersT = customersT.filter(
                ({ id }) => (id != customerTypeId));

            setCustomersT(newCustomersT);
        }
        setIsLoading(false);
    }

    const handleUnsubscribeCustomerType = async (e) => {

        const customerTypeId = parseInt(e.target.id);
        const response = await unsubscribeCustomerType(
            customerTypeId);

        const updateCutomersT = customersT.map(
            (customerT) => customerT.id === customerTypeId
                ? { ...customerT, state: false }
                : customerT
        );
        console.log('updateCutomersT ', updateCutomersT);
        setCustomersT(updateCutomersT);
        console.log(response);
    }


    const onClickUpdate = async (e) => {
        
        const customerTypeId = parseInt(e.target.id);
        const response = await getCustomerTypeById(
            customerTypeId);

        navigate(
            "/update-tipos-clientes",
            { state: { customerTypeData: response } }
        )
    }



    return <>

        <div class="relative overflow-x-auto">

            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>

                        <th scope="col" class="px-6 py-3">
                            Nombre
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Estado
                        </th>
                        <th scope="col" class="px-6 py-3">
                            ...
                        </th>
                    </tr>
                </thead>
                <tbody>


                    {
                        isLoading ?
                            <div>
                                Cargando ...
                            </div> :
                            customersT.map(({ id, name, state }) => (
                                <tr
                                    key={id}
                                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                    <th >
                                        {name}
                                    </th>
                                    <th>
                                        {state ? 'Activo' : 'Inactivo'}
                                    </th>
                                    <th>
                                        <CustomButton
                                            id={id}
                                            name={'Eliminar'}
                                            type={'button'}
                                            styles={'bg-red-700 hover:bg-red-800'}
                                            onclick={handleDeleteCustomerType}
                                        />


                                        <CustomButton
                                            id={id}
                                            name={'Modificar'}
                                            type={'button'}
                                            styles={'bg-yellow-600 hover:bg-yellow-600'}
                                            onclick={onClickUpdate}
                                        />


                                        <CustomButton
                                            id={id}
                                            name={'Dar de baja'}
                                            type={'button'}
                                            styles={'bg-gray-700 hover:bg-gray-700'}
                                            onclick={handleUnsubscribeCustomerType}
                                        />

                                    </th>
                                </tr>
                            ))

                    }



                </tbody>
            </table>
        </div>

    </>
}
