import axios from 'axios';

export const getApiResources = (url) => axios.get(url, {
    headers: new Headers({
        'Content-Type': 'application/json'
    })
})
    .then(response => response.data);

export const postApiResource = (url, resource, config = {}) => {
    return axios.post(url, resource, config)
        .then(response => {
            if (response.status === 200) {
                return response;
            }
            throw response;
        });
}

export const deleteApiResource = url => axios.delete(url, {
    headers: {
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('token')
    }
})
    .then(response => {
        if (response.status === 200) {
            return response;
        }
        throw response;
    });;