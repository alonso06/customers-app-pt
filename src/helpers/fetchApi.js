const URL_BASE = 'http://127.0.0.1:8000/';

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


    console.log('holaa')

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