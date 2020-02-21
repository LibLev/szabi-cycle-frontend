import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';


class Product extends Component {

    render() {
        return (
            <div className="col-sm-4">
                <div className="card" style={{width: "18rem"}}>
                    <img className="card-img-top" src={`data:image/jpeg;base64,${this.props.data.productPic}`}
                         alt="Card image cap"/>
                    <div className="card-body">
                        <p className="card-text"> NAME: {this.props.data.name}</p>
                        <p className="card-text"> BRAND: {this.props.data.brand}</p>
                        <p className="card-text"> {this.props.data.about}</p>
                        <p className="card-text"> PRICE: {this.props.data.price}</p>
                    </div>
                </div>
            </div>
        )
    }

}

export default Product;