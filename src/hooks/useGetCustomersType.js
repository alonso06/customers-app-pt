import { useEffect, useState } from "react";
import { getCustomersTypeApi } from "../helpers/fetchApi";

export const useGetCustomersType = () => {

    const [customersT, setCustomersT] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    const getCustomersType = async () => {

        const listCType = await getCustomersTypeApi()
        setCustomersT(listCType);
        setIsLoading(false);
    }

    useEffect(() => {
        getCustomersType();
    }, []);

    return {
        customersT,
        setCustomersT,
        isLoading, 
        setIsLoading
    }
    
}
