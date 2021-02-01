import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signUp } from '../actions';
const SignUp = (props) => {
    // Initilizing states
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [age, setAge] = useState(0);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // onInputChange functions
    const onNameChange = (e) => {
        setName(e.target.value)
    }
    const onAddressChange = (e) => {
        setAddress(e.target.value);
    }
    const onAgeChange = (e) => {
        setAge(e.target.value);
    }
    const onEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const onUsernameChange = (e) => {
        setUsername(e.target.value);
    }
    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }

    // on Signup button clicked
    const submit = (e) => {
        e.preventDefault();
        props.signUp(name, address, age, email, username, password);
        const token = props.apiResponce.data;
        console.log(token);
        if (token) {
            localStorage.setItem("logedIn", token);
            window.location = "/dashbord";
        }
    }
    // Some JSX
    return (
        <div className="container">
            <h1>SignUp</h1>
            <form>
                <div className="row mb-2">
                    <label>Name:</label>
                    <div className="col sm-12">
                        <input value={name} onChange={onNameChange} type="text" placeholder="Name" />
                    </div>
                </div>

                <div className="row mb-2">
                    <label>Address:</label>
                    <div className="col sm-12">
                        <input value={address} onChange={onAddressChange} type="text" placeholder="Address" />
                    </div>
                </div>

                <div className="row mb-2">
                    <label>Age:</label>
                    <div className="col sm-12">
                        <input value={age} onChange={onAgeChange} type="number" placeholder="Age" />
                    </div>
                </div>

                <div className="row mb-2">
                    <label>Email:</label>
                    <div className="col sm-12">
                        <input value={email} onChange={onEmailChange} type="email" placeholder="Email" />
                    </div>
                </div>

                <div className="row mb-2">
                    <label>Username:</label>
                    <div className="col sm-12">
                        <input value={username} onChange={onUsernameChange} type="text" placeholder="Username" />
                    </div>
                </div>

                <div className="row mb-2">
                    <label>Password:</label>
                    <div className="col sm-12">
                        <input value={password} onChange={onPasswordChange} type="password" placeholder="Password" />
                    </div>
                </div>
                <button className="btn btn-primary" onClick={submit} type="submit">SignUp</button>
                <Link to="/" className="btn btn-primary">Back</Link>
            </form>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { apiResponce: state.signUp };
}
export default (connect(
    mapStateToProps,
    { signUp }
))(SignUp);