import { useGetCustomersType } from "../hooks/useGetCustomersType"

export const TableView = () => {

    const { customersT } = useGetCustomersType()
    console.log(customersT)
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
                                    <button type="button">eliminar</button>
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
