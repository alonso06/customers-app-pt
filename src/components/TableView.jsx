import { deleteCustomerType } from "../helpers/fetchApi"
import { useGetCustomersType } from "../hooks/useGetCustomersType"
import { CustomButton } from "./CustomButton"

export const TableView = () => {

    const { customersT, setCustomersT } = useGetCustomersType()

    const handleDeleteCustomerType = async (e) => {

        const customerTypeId = e.target.id;
        const response = await deleteCustomerType(
            parseInt(customerTypeId));

        if (response) {
            const newCustomersT = customersT.filter(
                ({ id }) => (id != customerTypeId));

            setCustomersT(newCustomersT);
        }
    }

    return <>

        <div class="relative overflow-x-auto">

            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {/*todo:Variar segun lista */}

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
                        customersT.map(({ id, name, state }) => (
                            <tr key={id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
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
                                </th>
                            </tr>
                        )
                        )

                    }



                </tbody>
            </table>
        </div>

    </>
}
