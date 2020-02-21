import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';

class Connection extends Component {

    render() {
        return (
            <div className="container">
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Email cím</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1"
                               placeholder="name@example.com"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Tárgy</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Üzenet</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
                    </div>
                    <div>
                        <button type="button" className="btn btn-secondary">Küldés</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Connection;