import axios from 'axios';

export const getApiResources = (url) => axios.get(url, {
    headers: new Headers({
        'Content-Type': 'application/json'
    })
}).then(response => response.data);

export const postApiResource = (url, resource) => {
    return axios.post(url, {
        ...resource
    })
        .then(response => {
            if (response.status === 200) {
                return response;
            }
            throw response;
        });
}