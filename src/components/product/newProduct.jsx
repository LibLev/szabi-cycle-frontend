import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";

class newProduct extends Component {

    state = {
      name : "",
      brand : "",
      about : "",
      price : "",
      productPic : ""
    };

    constructor(props) {
        super(props);
    }

    onChangeName = (event) => {
        this.setState({name: event.target.value});
        console.log(this.state.name)
    };

    onChangeBrand = (event) => {
        this.setState({brand: event.target.value})
    };

    onChangeAbout = (event) => {
        this.setState({about: event.target.value})
    };

    onChangePrice = (event) => {
        this.setState({price: event.target.value})
    };

    onChangeProductPic = (event) => {
        this.setState({productPic: event.target.files[0]})
    };

    productAdding = () =>{
        const fd = new FormData();
        fd.append("image",this.state.productPic, this.state.productPic.name);
        axios.post("http://localhost:8080/products/add-new-product",{
            name : this.state.name,
            brand : this.state.brand,
            about : this.state.about,
            price : this.state.price,
            productPic : fd
        }).then(resp => console.log(resp));
        window.location = "/allProduct";
    };

    render() {
        return (
            <div className="container-md">
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Termék neve</label>
                        <textarea name="name" value={this.state.name} onChange={this.onChangeName} className="form-control" id="exampleFormControlTextarea1" rows="1"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Márka</label>
                        <textarea name="brand" value={this.state.brand} onChange={this.onChangeBrand} className="form-control" id="exampleFormControlTextarea1" rows="1"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Adatok</label>
                        <textarea name="about" value={this.state.about} onChange={this.onChangeAbout} className="form-control" id="exampleFormControlTextarea1" rows="10"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Ár</label>
                        <textarea name="price" value={this.state.price} onChange={this.onChangePrice} className="form-control" id="exampleFormControlTextarea1" rows="1"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlFile1">Kép</label>
                        <input name="productPic" onChange={this.onChangeProductPic} type="file" className="form-control-file" id="exampleFormControlFile1"/>
                    </div>
                    <div>
                        <button type="button" className="btn btn-secondary" onClick={this.productAdding}>Termék feltöltése</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default newProduct;