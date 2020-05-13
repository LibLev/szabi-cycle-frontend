import React, {Component} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import BicycleCard from "./product/bicycle/bicycleCard";
import ComponentCard from "./product/component/componentCard";


class MainPage extends Component {

    state = {
        bicycles: [],
        components: []
    };

    getBicycles = () => {
        axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";
        axios.get(`http://localhost:8080/get-all-bicycle`)
            .then((response) => {
                    console.log(response.data);
                    this.setState({bicycles: response.data})
                },
                (error) => {
                    console.log(error)
                }
            )
    };

    getComponents = () => {
        axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";
        axios.get(`http://localhost:8080/get-all-component`)
            .then((response) => {
                    console.log(response.data);
                    this.setState({components: response.data})
                },
                (error) => {
                    console.log(error)
                }
            )
    };

    componentDidMount() {
        this.getBicycles();
        this.getComponents();
    }

    render() {
        return (
            <div className="container-md">
                <h5>Legújabb kerékpárok:</h5>
                <div className="row">
                    {this.state.bicycles.slice(0,3).map((d) => (<BicycleCard data={d}/>))}
                </div>
                <h5>Legújabb alkatrészek:</h5>
                <div className="row">
                    {this.state.components.slice(0,3).map((d) => (<ComponentCard data={d}/>))}
                </div>
            </div>
        )
    }
}

export default MainPage;