import { Link } from "react-router-dom"
import { CustomButton } from "./CustomButton"
import { TableView } from "./TableView"
import { TitleForm } from "./TitleForm"

export const TypeCustomerAdmin = () => {
  return (<>

    <div
      className="flex-col ">

      <TitleForm title={'Gestionar tipos de clientes'} />

      <br />
      <TableView />

      <br />

      <Link to={'/add-tipos-clientes'}>
        <CustomButton 
          name={'Agregar'}  
          styles={'bg-green-700 hover:bg-green-800'}
        />
      </Link>
    </div>


  </>)
}
