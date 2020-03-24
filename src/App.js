import React, {Component} from 'react';
import './App.css';
import NavBar from "./components/navbar/navbar";
import {Switch, Route} from "react-router-dom";
import Connection from "./components/connection/connection";
import allProduct from "./components/product/allProductCard";
import newProduct from "./components/product/newProduct";
import productPage from "./components/product/productPage";

class App extends Component {


    render() {
        return (
            <div>
                <NavBar/>
                <Switch>
                    <Route path="/home" component={allProduct}/>
                    <Route path="/connection" component={Connection}/>
                    <Route path="/newProduct" component={newProduct}/>
                    <Route path="/product" component={productPage}/>
                </Switch>
            </div>
        );
    }
}

export default App;
