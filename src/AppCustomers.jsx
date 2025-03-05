import { Link } from "react-router-dom"
import { OptionMenu } from "./components/OptionMenu"

export const AppCustomers = () => {
  return (
    <div className='flex-col'>
      <Link to={'/admin-clientes'} >
        <OptionMenu name={'Clientes'} />

      </Link>

      <Link to={'/admin-tipos-clientes'}>
        <OptionMenu name={'Tipos de clientes'} />

      </Link>

    </div>
  )
}
