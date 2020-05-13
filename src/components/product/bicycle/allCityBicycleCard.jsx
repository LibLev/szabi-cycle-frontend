import React, {Component} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import BicycleCard from "./bicycleCard";


class AllCityBicycleCard extends Component {

    state = {
        data: [],
    };

    getProducts = () => {
        axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";
        axios.get(`http://localhost:8080/get-all-city-bicycle`)
            .then((response) => {
                    console.log(response.data);
                    this.setState({data: response.data});
                    console.log(this.state.isEmpty)
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
            <div>
                {this.state.data.length > 0 ? (
                        <div className="container-md">
                            <div className="row">
                                {this.state.data.map((d) => (<BicycleCard data={d}/>))}
                            </div>
                        </div>
                    )
                    : (<div className="container-md">
                        <h4>Jelenleg nincs ilyen termékünk</h4>
                    </div>)}
            </div>
        )
    }
}

export default AllCityBicycleCard;