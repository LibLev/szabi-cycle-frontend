import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';

class Connection extends Component {

    render() {
        return (
            <div className="container">
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1"
                               placeholder="name@example.com"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Title</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Message</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
                    </div>
                    <div>
                        <button type="button" className="btn btn-secondary">Send</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Connection;