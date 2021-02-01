import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../api/axios';
import '../css/form.css';
class LoginForm extends React.Component {
    async UNSAFE_componentWillMount() {
        const responce = await auth.get("/api/token/verify", {
            params:{
                token: localStorage.getItem("logedIn")
            }
        });
        if(responce.status === 200) {
            window.location = "/dashbord";
        }

    }
    constructor(props) {
        super(props);
        this.state = { userName: "", password: "" };
    }
    onUserNameChange = (e) => {
        this.setState({ userName: e.target.value });
    }
    onPasswordChange = (e) => {
        this.setState({ password: e.target.value });
    }

    onLogin = async (e) => {
        e.preventDefault();
        const responce = await auth.get('/login', {
            params: {
                username: this.state.userName,
                password: this.state.password
            }
        });
        console.log(responce);
        if (responce.data === -1) {
            console.log("User does not exist");
        } 
        else if (responce.data.length > 0) {
            console.log("login success");
        } else {
            console.log("Invalid Password!!!");
        }
    }
    render() {
        return (
            <div className="container">
                <h1>Login Form</h1>
                <form>
                    <div className="row mb-6">
                        <label>Username:</label>
                        <div className="col sm-10">
                            <input onChange={this.onUserNameChange} value={this.state.userName} type="text" placeholder="Username" />
                        </div>
                    </div>
                    <div className="row mb-6">
                        <label>Password:</label>
                        <div className="col sm-10">
                            <input onChange={this.onPasswordChange} value={this.state.password} type="password" placeholder="Password" />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.onLogin}>Login</button>
                    <Link to="/register" className="btn btn-primary">SignUp</Link>
                </form>
            </div>
        );
    }
}

export default LoginForm;