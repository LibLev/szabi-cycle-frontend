import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Redirect} from "react-router";

class BicycleCard extends Component {

    state = {
        redirect: false
    };

    openProductPage = () => {
        localStorage.setItem("productId", this.props.data.id);
        this.setState({redirect: true})
    };

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to="/bicycle"/>
        }

    };

    getIndexOfMainPic = () => {
        let result = 0;
        for (let i = 0; i < this.props.data.imgUris.length; i++) {
            if (this.props.data.imgUris[i] === this.props.data.imgUri){
                result = i;
                break
            }
        }
        return result;
    }

    render() {
        return (
            <div>
                {this.renderRedirect()}
                <div className="col-sm-4" onClick={this.openProductPage} style={{marginTop: "20px"}}>
                    <div className="card" style={{width: "18rem"}}>
                        <img className="card-img-top"
                             src={`https://szabicycle.herokuapp.com/bicycle/image/download/${this.props.data.id}/${this.getIndexOfMainPic()}`}
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

export default BicycleCard;