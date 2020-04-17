import React, {Component} from 'react';
import './App.css';
import NavBar from "./components/navbar/navbar";
import {Switch, Route} from "react-router-dom";
import Connection from "./components/connection/connection";
import allProduct from "./components/product/allProductCard";
import productPage from "./components/product/productPage";
import allBicycle from "./components/product/allBicycleCard";
import allComponent from "./components/product/allComponentCard";
import about from "./components/about/about"

class App extends Component {


    render() {
        return (
            <div>
                <NavBar/>
                <div className="container-md" style={{marginTop: "30px"}}>
                    <Switch>
                        <Route path="" component={allProduct}/>
                        <Route path="/home" component={allProduct}/>
                        <Route path="/bicycles" component={allBicycle}/>
                        <Route path="/components" component={allComponent}/>
                        <Route path="/connection" component={Connection}/>
                        <Route path="/product" component={productPage}/>
                        <Route path="/about" component={about}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
