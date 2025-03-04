import { CustomButton } from "./CustomButton"
import { CustomSearch } from "./CustomSearch"
import { TableView } from "./TableView"
import { TitleForm } from "./TitleForm"

export const CustomerAdmin = () => {
  return (<>

    <div 
        className="flex-col ">

        <TitleForm title={'Gestionar clientes'}/>
        <br />
        <CustomSearch/>
        <br />
        <TableView/>

        <br />

        <CustomButton name={'Agregar'} styles={'bg-green-700 hover:bg-green-800'} />
    </div>

    
  </>)
}
