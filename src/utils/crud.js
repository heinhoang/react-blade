import axios from 'axios';

export const getApiResources = (url) => axios.get(url, {
    headers: new Headers({
        'Content-Type': 'application/json'
    })
}).then(result => result.data);