import { OptionMenu } from "./OptionMenu"

export const AppCustomers = () => {
  return (
    <div className='flex-col'>
       <OptionMenu name={'Clientes'}/>
       <OptionMenu name={'Tipos de clientes'} />
  </div>
  )
}
