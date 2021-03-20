import React, {Component} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import ComponentCard from "./componentCard";
import "../../../body.css"

class GroupsetCards extends Component {

    state = {
        data: []
    };

    getProducts = () => {
        axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";
        axios.get(`https://szabicycle.herokuapp.com/get-all-groupset-component`)
            .then((response) => {
                    console.log(response.data);
                    this.setState({data: response.data});
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
            <div id="main-wrapper">
                {this.state.data.length > 0 ? (
                        <div className="container-md">
                            <div className="row">
                                {this.state.data.map((d) => (<ComponentCard data={d}/>))}
                            </div>
                        </div>
                    )
                    : (<div className="container" id="no-content">
                        <h4>Jelenleg nincs ilyen termékünk</h4>
                    </div>)}
            </div>
        )
    }
}

export default GroupsetCards;