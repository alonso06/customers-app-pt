import { CustomButton } from "./CustomButton"
import { TableView } from "./TableView"
import { TitleForm } from "./TitleForm"


export const TypeCustomerAdmin = () => {
  return (<>

    <div 
        className="flex-col ">

        <TitleForm title={'Gestionar tipos de clientes'}/>

        <br />
        <TableView/>

        <br />

        <CustomButton name={'Agregar'} />
    </div>

    
  </>)
}
