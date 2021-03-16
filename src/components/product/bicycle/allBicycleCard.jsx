import React, {Component} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import BicycleCard from "./bicycleCard";


class AllBicycleCard extends Component {

    state = {
        data: []
    };

    getProducts = () => {
        axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";
        axios.get(`/get-all-bicycle`)
            .then((response) => {
                    console.log(response.data);
                    this.setState({data: response.data})
                },
                (error) => {
                    console.log(error)
                }
            )
    };

    componentDidMount() {
        this.getProducts();
        localStorage.clear()
    }

    render() {
        return (
            <div className="container-md">
                <div className="row">
                    {this.state.data.map((d) => (<BicycleCard data={d}/>))}
                </div>
            </div>
        )
    }
}

export default AllBicycleCard;