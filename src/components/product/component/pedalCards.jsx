import React, {Component} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import ComponentCard from "./componentCard";


class PedalCards extends Component {

    state = {
        data: []
    };

    getProducts = () => {
        axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";
        axios.get(`http://localhost:8080/get-all-pedal-component`)
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
            <div>
                {this.state.data.length > 0 ? (
                        <div className="container-md">
                            <div className="row">
                                {this.state.data.map((d) => (<ComponentCard data={d}/>))}
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

export default PedalCards;