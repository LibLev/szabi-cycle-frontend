import React, {Component} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import Product from "./product";

class AllProduct extends Component {

    state = {
        data: []
    };

    async getProducts() {
        axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";
        await axios.get(`http://localhost:8080/products/get-all-product`)
            .then((response) => {
                    this.setState({data: response.data})
                },
                (error) => {
                    console.log(error)
                }
            )
    }

    componentDidMount() {
        this.getProducts()
    }

    render() {
        return (
            <div className="container-md">
                <div className="row">
                    {this.state.data.map((d) => (<Product data={d}/>))}
                </div>
            </div>
        )
    }
}

export default AllProduct;