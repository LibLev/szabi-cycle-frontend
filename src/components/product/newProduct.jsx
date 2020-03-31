import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";

class newProduct extends Component {

    state = {
        productName: "",
        productBrand: "",
        productDetails: "",
        productPrice: "",
        selectedFiles: null,
        imgUris: []
    };

    productNameOnChange = event => {
        this.setState({productName: event.target.value})
    };

    productBrandOnChange = event => {
        this.setState({productBrand: event.target.value})
    };

    productDetailsOnChange = event => {
        this.setState({productDetails: event.target.value})
    };

    productPriceOnChange = event => {
        this.setState({productPrice: event.target.value})
    };

    fileSelectedHandler = event => {
        let files = event.target.files;
        const formData = new FormData;
        const names = [];
        for (let i = 0; i < files.length; i++) {
            formData.append("images", files[i], files[i].name);
            names.push(files[i].name);
        }
        this.setState({selectedFiles: formData});
        this.setState({imgUris: names})
    };

    fileUploadHandler = () => {
        axios.post("http://localhost:8080/uploadMultipleFiles", this.state.selectedFiles).then(resp => {
            console.log(resp);
            console.log(this.state.imgUris)
        })
    };

    saveProduct = () => {
        axios.post("http://localhost:8080/saveProduct",
            {
                name: this.state.productName,
                brand: this.state.productBrand,
                details: this.state.productDetails,
                price: this.state.productPrice,
                imgUris: this.state.imgUris.toString()
            })
            .then(console.log(this.state))
            .then(resp => {
                console.log(resp)
            });
        window.location = "/home";
    };

    render() {
        return (
            <div className="container">
                <div className="form-group">
                    <div>
                        <label htmlFor="exampleFormControlFile1">Képek kiválasztása</label>
                        <input type="file" className="form-control-file" id="exampleFormControlFile1" multiple
                               onChange={this.fileSelectedHandler}/>
                    </div>
                    <button type="submit" onClick={this.fileUploadHandler}>Képek feltöltése</button>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Termék neve</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1"
                           placeholder="De Rosa King" onChange={this.productNameOnChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Márka</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1"
                           placeholder="De Rosa" onChange={this.productBrandOnChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Adatok</label>
                    <textarea type="text" className="form-control" id="exampleFormControlInput1" rows="10"
                              onChange={this.productDetailsOnChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Ár</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1"
                           placeholder="100" onChange={this.productPriceOnChange}/>
                </div>
                <button type="submit" className="btn btn-secondary" onClick={this.saveProduct}>Mentés</button>
            </div>
        )
    }
}

export default newProduct;