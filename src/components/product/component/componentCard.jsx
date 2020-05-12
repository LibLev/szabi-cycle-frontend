import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Redirect} from "react-router";

class ComponentCard extends Component {

    state = {
        redirect: false
    };

    openProductPage = () => {
        localStorage.setItem("productId", this.props.data.id);
        this.setState({redirect: true})
    };

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to="/component"/>
        }

    };

    render() {
        return (
            <div>
                {this.renderRedirect()}
                <div className="col-sm-4" onClick={this.openProductPage} style={{marginTop: "20px"}}>
                    <div className="card" style={{width: "18rem"}}>
                        <img className="card-img-top"
                             src={`http://localhost:8080/downloadFile/${this.props.data.imgUris[0]}`}
                             alt="Card image cap" style={{height: "70%"}}/>
                        <div className="card-body">
                            <p className="card-text"> {this.props.data.name}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default ComponentCard;