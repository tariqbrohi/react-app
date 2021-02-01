import axios from '../api/axios';


export const signUp = (name, address, age, email, username, password) => async dispatch => {
    const responce = await axios.get('/register', {
        params:
        {
            name: name,
            address: address,
            age: age,
            email: email,
            username: username,
            password: password
        }
    });
    dispatch({ type: "SIGN_UP", payload: responce })
}