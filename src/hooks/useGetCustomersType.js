import { useEffect, useState } from "react";
import { getCustomersTypeApi } from "../helpers/fetchApi";

export const useGetCustomersType = () => {

    const [customersT, setCustomersT] = useState([]);

    const getCustomersType = async () => {

        const listCType = await getCustomersTypeApi()
        setCustomersT(listCType);
        
    }

    useEffect(() => {
        getCustomersType();
    }, []);

    return {customersT}
    
}
