import React, {Component} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';


class Signin extends Component {

    state = {
        username: "",
        password: ""
    };

    onUsernameChange = (event) => {
        this.setState({username: event.target.value});
        console.log(this.state.username);
    };

    onPasswordChange = (event) => {
        this.setState({password: event.target.value});
        console.log(this.state.password);
    };


    login = () => {
        axios.post(`http://localhost:8080/auth/signin`,
            {
                username: this.state.username,
                password: this.state.password
            }
        ).then(resp => {
            console.log(resp.data);
            localStorage.setItem("token", resp.data.token);
        });
        window.location = "/editProducts"
    };

    render() {
        return (
            <div className="container-sm">
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" value={this.state.username} onChange={this.onUsernameChange}
                               placeholder="username"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" value={this.state.password}
                               onChange={this.onPasswordChange} placeholder="password"/>
                    </div>
                </form>
                <button type="button" className="mybtn" onClick={this.login}>
                    Login
                </button>
            </div>
        )
    }

}

export default Signin;