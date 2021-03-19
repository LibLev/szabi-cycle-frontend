import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import axios from "axios";
import Footer from "../../footer";

class BicyclePage extends Component {

    state = {
        isLoaded: false,
        data: []
    };


    getProductData = () => {
        axios.get("https://szabicycle.herokuapp.com/bicycle/" + localStorage.getItem("productId"))
            .then((response) => {
                    this.setState({data: response.data});
                    this.setState({isLoaded: true})
                },
                (error) => {
                    console.log(error)
                })
    };

    createImgs = () => {
        let imgs = [];
        for (let i = 0; i < this.state.data.imgUris.length; i++) {
            imgs.push(
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={`https://szabicycle.herokuapp.com/bicycle/image/download/${this.state.data.id}/${i}`}
                        alt="Third slide"
                    />
                    <Carousel.Caption/>
                </Carousel.Item>
            )
        }
        return imgs;
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
                                                    {this.createImgs()}
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
                                                                <table>
                                                                    <tr>
                                                                        <th>Márka:</th>
                                                                        <td>{this.state.data.brand}</td>
                                                                    </tr>
                                                                </table>
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="col-sm-2 control-label"
                                                                       htmlFor="inputContact1"><b>Adatok:</b></label>
                                                                <div className="col-sm-10">
                                                                    <table>
                                                                        <tr>
                                                                            <th>Váz</th>
                                                                            <td>{this.state.data.frame}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>Villa</th>
                                                                            <td>{this.state.data.fork}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>Szet</th>
                                                                            <td>{this.state.data.groupSet}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>Váltó</th>
                                                                            <td>{this.state.data.shifters}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>Fékváltókar</th>
                                                                            <td>{this.state.data.callipers}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>Fék</th>
                                                                            <td>{this.state.data.breaks}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>Nyeregcső</th>
                                                                            <td>{this.state.data.seatPost}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>Nyereg</th>
                                                                            <td>{this.state.data.saddle}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>Stucni</th>
                                                                            <td>{this.state.data.stem}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>Kormány</th>
                                                                            <td>{this.state.data.handlebar}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>Bandázs/Markolat</th>
                                                                            <td>{this.state.data.barTape}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>Pedál</th>
                                                                            <td>{this.state.data.pedal}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>Kerekek</th>
                                                                            <td>{this.state.data.wheels}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>Egyéb adatok</th>
                                                                            <td>{this.state.data.details}</td>
                                                                        </tr>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <table>
                                                                    <tr>
                                                                        <th>Ár:</th>
                                                                        <td>{this.state.data.price}</td>
                                                                    </tr>
                                                                </table>
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
                <Footer/>
            </div>
        )
    }
}

export default BicyclePage;