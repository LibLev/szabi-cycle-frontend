import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";
import {Redirect} from "react-router";

class Connection extends Component {

    state = {
        emailAddress: "",
        subject: "",
        message: "",
        redirect: false
    };

    constructor(props) {
        super(props);
    }

    onChangeEmailAddress = (event) => {
        this.setState({emailAddress: event.target.value})
    };

    onChangeSubject = (event) => {
        this.setState({subject: event.target.value})
    };

    onChangeMessage = (event) => {
        this.setState({message: event.target.value})
    };

    sendMail = () => {
        axios.post("/send-mail", {
            emailAddress: this.state.emailAddress,
            subject: this.state.subject,
            message: this.state.message
        }).then((resp) => {
            console.log(resp.data);
            this.setState({redirect: true})
        }).catch((e) => {
            console.log(e.message)
        });
    };

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to="/home"/>
        }
    };

    render() {
        localStorage.clear();
        return (
            <div>
                {this.renderRedirect()}
                <div className="container">
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Email cím</label>
                            <input name="emailAddress" value={this.state.emailAddress}
                                   onChange={this.onChangeEmailAddress}
                                   type="email"
                                   className="form-control" id="exampleFormControlInput1"
                                   placeholder="name@example.com"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Tárgy</label>
                            <textarea name="subject" value={this.state.subject} onChange={this.onChangeSubject}
                                      className="form-control"
                                      id="exampleFormControlTextarea1" rows="1"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Üzenet</label>
                            <textarea name="message" value={this.state.message} onChange={this.onChangeMessage}
                                      className="form-control"
                                      id="exampleFormControlTextarea1" rows="10"/>
                        </div>
                        <div>
                            <button type="button" className="btn btn-secondary" onClick={this.sendMail}>Küldés</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Connection;