import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';

class ProductCard extends Component {

    openProductPage = () => {
        localStorage.setItem("productId", this.props.data.id);
        window.location = "/product"
    };

    render() {
        return (
            <div className="col-sm-4" onClick={this.openProductPage} style={{marginTop: "20px"}}>
                <div className="card" style={{width: "18rem"}}>
                    <img className="card-img-top" src={`http://localhost:8080/downloadFile/${this.props.data.imgUris[0]}`}
                         alt="Card image cap" style={{ height: "70%" }}/>
                    <div className="card-body">
                        <p className="card-text"> {this.props.data.name}</p>
                        {/*<p className="card-text"> <b>Márka:</b> {this.props.data.brand}</p>
                        <p className="card-text" style={{ whiteSpace: "pre-line" }}> <b>Adatok:</b> <br/>{this.props.data.details}</p>
                        <p className="card-text"> <b>Ár:</b> {this.props.data.price} huf</p>*/}
                    </div>
                </div>
            </div>
        )
    }

}

export default ProductCard;