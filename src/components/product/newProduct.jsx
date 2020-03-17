import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";

class newProduct extends Component {

    state = {
        productName: "",
        productBrand: "",
        productDetails: "",
        productPrice: "",
        imgUri: "",
        selectedFile: null
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
        this.setState({selectedFile: event.target.files[0]})
    };

    fileUploadHandler = () => {
        const fd = new FormData;
        fd.append("image", this.state.selectedFile, this.state.selectedFile.name);
        axios.post("http://localhost:8080/uploadFile", fd).then(resp => {
            console.log(resp);
            this.setState({imgUri: resp.data.fileName})
        })
    };

    saveProduct = () => {
        axios.post("http://localhost:8080/saveProduct",
            {
                name: this.state.productName,
                brand: this.state.productBrand,
                details: this.state.productDetails,
                price: this.state.productPrice,
                imgUri: this.state.imgUri
            })
            .then(console.log(this.state))
            .then(resp => {
                console.log(resp)
            })
        window.location = "/home";
    };

    render() {
        return (
            <div className="container">
                    <div className="form-group">
                        <label htmlFor="exampleFormControlFile1">Kép</label>
                        <input type="file" className="form-control-file" id="exampleFormControlFile1"
                               onChange={this.fileSelectedHandler}/>
                        <button type="submit" onClick={this.fileUploadHandler}>Kép feltöltése</button>
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