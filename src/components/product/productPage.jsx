import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import axios from "axios";

class ProductPage extends Component {

    state = {
        isLoaded: false,
        data: []
    };

    getProductData = () => {
        axios.get("http://localhost:8080/product/" + localStorage.getItem("productId"))
            .then((response) => {
                    this.setState({data: response.data});
                    this.setState({isLoaded: true})
                },
                (error) => {
                    console.log(error)
                })
    };

    componentDidMount() {
        this.getProductData();
    };


    render() {
        return (
            <div>
                {this.state.isLoaded ? (
                        <div className="container-sm">
                            <div className="container bootstrap snippet">
                                <div className="row ng-scope">
                                    <div className="col-md-4">
                                        <div className="panel panel-default">
                                            <div className="panel-body text-center">
                                                <Carousel>
                                                    <Carousel.Item>
                                                        <img
                                                            className="d-block w-100"
                                                            src={`http://localhost:8080/downloadFile/${this.state.data.imgUris[0]}`}
                                                            alt="First slide"
                                                        />
                                                        <Carousel.Caption>

                                                        </Carousel.Caption>
                                                    </Carousel.Item>
                                                    <Carousel.Item>
                                                        <img
                                                            className="d-block w-100"
                                                            src={`http://localhost:8080/downloadFile/${this.state.data.imgUris[1]}`}
                                                            alt="Third slide"
                                                        />

                                                        <Carousel.Caption>

                                                        </Carousel.Caption>
                                                    </Carousel.Item>
                                                    <Carousel.Item>
                                                        <img
                                                            className="d-block w-100"
                                                            src={`http://localhost:8080/downloadFile/${this.state.data.imgUris[2]}`}
                                                            alt="Third slide"
                                                        />

                                                        <Carousel.Caption>

                                                        </Carousel.Caption>
                                                    </Carousel.Item>
                                                </Carousel>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="panel panel-default">
                                            <div className="panel-body">
                                                <div className="h4 text-center"><b>{this.state.data.name}</b></div>
                                                <div className="row pv-lg">
                                                    <div className="col-lg-3"></div>
                                                    <div className="col-lg-8">
                                                        <form className="form-horizontal ng-pristine ng-valid">
                                                            <div className="form-group">
                                                                <label className="col-sm-2 control-label"
                                                                       htmlFor="inputContact1"><b>Márka:</b></label>
                                                                <div className="col-sm-10">
                                                                    <span>{this.state.data.brand}</span>
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="col-sm-2 control-label"
                                                                       htmlFor="inputContact1"><b>Adatok:</b></label>
                                                                <div className="col-sm-10">
                                                                    <span>{this.state.data.details}</span>
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="col-sm-2 control-label"
                                                                       htmlFor="inputContact1"><b>Ár:</b></label>
                                                                <div className="col-sm-10">
                                                                    <span>{this.state.data.price}</span>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                    : "Loading"}
            </div>
        )
    }
}

export default ProductPage;