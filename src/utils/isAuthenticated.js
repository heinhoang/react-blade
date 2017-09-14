const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    let initialState = {
        isAuthenticated: false,
        token: null,
        name: null
    };
    if (token) {
        initialState = {
            isAuthenticated: true,
            token: token,
            // name: jwtDecode(token).sub
            name: token
        };
    }

    return initialState;
};

export default isAuthenticated;
