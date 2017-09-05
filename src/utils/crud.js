const sendCredentials = (route, credentials) => {
    return fetch(`http://localhost:8080/auth/${route}`, {
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        method: 'POST',
        body: JSON.stringify(credentials)
    })
        .then(response => {
            if (response.status === 200) {
                return response.json();
            }
            throw response;
        });
};

export {
    sendCredentials
};