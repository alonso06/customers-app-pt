const URL_BASE = 'http://127.0.0.1:8000/';

export const getCustomerTypeById = async (id) => {

    const api_url = URL_BASE + `customers_type/${id}/`;
    const response = await fetch(api_url);
    const data = await response.json();
    return {
        'id':data.id,
        'name': data.name,
        'state':data.state
    };
}

export const getCustomersTypeApi = async () => {

    const api_url = URL_BASE + "customers_type/";
    const response = await fetch(api_url);
    const data = await response.json();


    const listCustomersType = data.map((ctype) => ({
        id: ctype.id,
        name: ctype.name,
        state: ctype.state
    }));

    return listCustomersType
}

export const createCustomerType = async (obj) => {

    const api_url = URL_BASE + "customers_type/";
    const response = await fetch(
        api_url,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: obj
        }
    );
    return response;
}

export const deleteCustomerType = async (id) => {

    try {
        const api_url = URL_BASE + `customers_type/${id}/`;
        const response = await fetch(
            api_url,
            {
                method: 'DELETE',
            }
        );
        // TODO: Revisar manejo de errores
        if(!response.ok){
            const {detail} = await response.json()
            throw new Error(`Error ${response.status} : ${detail}`)
        }

        return response;

        
    } catch (err) {
        console.error('Error ', err);
    }
}

// TODO: Terminar

export const updateCustomerType = async (obj) => {

    const api_url = URL_BASE + "customers_type/";
    const response = await fetch(
        api_url,
        {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: obj
        }
    );
    return response;
}

export const unsubscribeCustomerType = async (id) => {

    try {
        const api_url = URL_BASE + `/customers_type/${id}/unsubscribe/`;
        const response = await fetch(
            api_url,
            {
                method: 'PATCH',
            }
        );
        // TODO: Revisar manejo de errores
        if(!response.ok){
            const {detail} = await response.json()
            throw new Error(`Error ${response.status} : ${detail}`)
        }

        return response;

        
    } catch (err) {
        console.error('Error ', err);
    }
}