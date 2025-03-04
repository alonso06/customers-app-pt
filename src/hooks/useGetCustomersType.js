import { useEffect, useState } from "react";
import { getCustomersTypeApi } from "../helpers/fetchApi";

export const useGetCustomersType = () => {

    const [customersT, setCustomersT] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getCustomersType = async () => {

        const listCType = await getCustomersTypeApi()
        setCustomersT(listCType);
        setIsLoading(!isLoading);
    }

    useEffect(() => {
        getCustomersType();
    }, []);

    return {customersT}
    
}
