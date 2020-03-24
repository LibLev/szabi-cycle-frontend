import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";

class newProduct extends Component {

    state = {
        productName: "",
        productBrand: "",
        productDetails: "",
        productPrice: "",
        // imgUri: "",
        // selectedFile: null,
        selectedFile1: null,
        selectedFile2: null,
        selectedFile3: null,
        selectedFile4: null,
        selectedFile5: null,
        imgUri1: "",
        imgUri2: "",
        imgUri3: "",
        imgUri4: "",
        imgUri5: "",
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

    /*    fileSelectedHandler = event => {
            this.setState({selectedFile: event.target.files[0]})
        };*/

    fileSelectedHandler1 = event => {
        this.setState({selectedFile1: event.target.files[0]})
    };

    fileSelectedHandler2 = event => {
        this.setState({selectedFile2: event.target.files[0]})
    };

    fileSelectedHandler3 = event => {
        this.setState({selectedFile3: event.target.files[0]})
    };

    fileSelectedHandler4 = event => {
        this.setState({selectedFile4: event.target.files[0]})
    };

    fileSelectedHandler5 = event => {
        this.setState({selectedFile5: event.target.files[0]})
    };

    /*    fileUploadHandler = () => {
            const fd = new FormData;
            fd.append("image", this.state.selectedFile, this.state.selectedFile.name);
            axios.post("http://localhost:8080/uploadFile", fd).then(resp => {
                console.log(resp);
                this.setState({imgUri: resp.data.fileName})
            })
        };*/

    multipleFileUploadHandler = () => {
        const fd = new FormData;
        fd.append("images", this.state.selectedFile1, this.state.selectedFile1.name);
        fd.append("images", this.state.selectedFile2, this.state.selectedFile2.name);
        fd.append("images", this.state.selectedFile3, this.state.selectedFile3.name);
        fd.append("images", this.state.selectedFile4, this.state.selectedFile4.name);
        fd.append("images", this.state.selectedFile5, this.state.selectedFile5.name);
        axios.post("http://localhost:8080/uploadMultipleFiles", fd).then(resp => {
            console.log(resp);
            this.setState(
                {
                    imgUris: this.state.imgUris.concat([this.state.selectedFile1.name, this.state.selectedFile2.name,
                        this.state.selectedFile3.name, this.state.selectedFile4.name, this.state.selectedFile5.name]),
                    imgUri1: this.state.selectedFile1.name,
                    imgUri2: this.state.selectedFile2.name,
                    imgUri3: this.state.selectedFile3.name,
                    imgUri4: this.state.selectedFile4.name,
                    imgUri5: this.state.selectedFile5.name
                });
            console.log(this.state)
        })
    };

    saveProduct = () => {
        axios.post("http://localhost:8080/saveProduct",
            {
                name: this.state.productName,
                brand: this.state.productBrand,
                details: this.state.productDetails,
                price: this.state.productPrice,
                imgUri1: this.state.imgUri1,
                imgUri2: this.state.imgUri2,
                imgUri3: this.state.imgUri3,
                imgUri4: this.state.imgUri4,
                imgUri5: this.state.imgUri5
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
                        <label htmlFor="exampleFormControlFile1">Kép1</label>
                        <input type="file" className="form-control-file" id="exampleFormControlFile1"
                               onChange={this.fileSelectedHandler1}/>
                        <label htmlFor="exampleFormControlFile1">Kép2</label>
                        <input type="file" className="form-control-file" id="exampleFormControlFile1"
                               onChange={this.fileSelectedHandler2}/>
                        <label htmlFor="exampleFormControlFile1">Kép3</label>
                        <input type="file" className="form-control-file" id="exampleFormControlFile1"
                               onChange={this.fileSelectedHandler3}/>
                        <label htmlFor="exampleFormControlFile1">Kép4</label>
                        <input type="file" className="form-control-file" id="exampleFormControlFile1"
                               onChange={this.fileSelectedHandler4}/>
                        <label htmlFor="exampleFormControlFile1">Kép5</label>
                        <input type="file" className="form-control-file" id="exampleFormControlFile1"
                               onChange={this.fileSelectedHandler5}/>
                    </div>
                    <button type="submit" onClick={this.multipleFileUploadHandler}>Kép feltöltése</button>
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