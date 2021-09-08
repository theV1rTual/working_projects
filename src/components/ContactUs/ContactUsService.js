import axios from 'axios';

export default async function postMessage(data) {

    return await axios({
        method: "POST",
        url: "https://www.manexerp.com/api/contact",
        data: data
    })
    .then((response) => {
        return response ? response.data.status: null;
    })
    .catch((error) => {
        return error
    })    
} 
