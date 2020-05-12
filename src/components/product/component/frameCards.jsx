import React, {Component} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import ComponentCard from "./componentCard";


class FrameCards extends Component {

    state = {
        data: []
    };

    getProducts = () => {
        axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";
        axios.get(`http://localhost:8080/get-all-frame-component`)
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
                    {this.state.data.map((d) => (<ComponentCard data={d}/>))}
                </div>
            </div>
        )
    }
}

export default FrameCards;