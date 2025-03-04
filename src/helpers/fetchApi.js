const URL_BASE = 'http://127.0.0.1:8000/';

export const getCustomersTypeApi = async () => {

    const api_url = URL_BASE+"customers_type/";
    const responseGiphy = await fetch(api_url);
    const data  = await responseGiphy.json();
    

    const listCustomersType = data.map((ctype) => ({
        id: ctype.id,
        name: ctype.name,
        state: ctype.state
    }));
    
    return listCustomersType
}