import React, {Component} from 'react';
import './App.css';
import NavBar from "./components/navbar/navbar";
import {Switch, Route} from "react-router-dom";
import Connection from "./components/connection/connection";
import allProduct from "./components/product/allProductCard";
import newProduct from "./components/handler/newProduct";
import productPage from "./components/product/productPage";
import allBicycle from "./components/product/allBicycleCard";
import allComponent from "./components/product/allComponentCard";
import signin from "./components/sigin/signin";
import editProducts from "./components/handler/editProducts";
import editProductPage from "./components/handler/editProductPage";
import about from "./components/about/about"

class App extends Component {


    render() {
        return (
            <div>
                <NavBar/>
                <div className="container-md" style={{marginTop: "30px"}}>
                    <Switch>
                        <Route path="/home" component={allProduct}/>
                        <Route path="/bicycles" component={allBicycle}/>
                        <Route path="/components" component={allComponent}/>
                        <Route path="/connection" component={Connection}/>
                        <Route path="/newProduct" component={newProduct}/>
                        <Route path="/product" component={productPage}/>
                        <Route path="/signin" component={signin}/>
                        <Route path="/editProducts" component={editProducts}/>
                        <Route path="/editProduct" component={editProductPage}/>
                        <Route path="/about" component={about}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
