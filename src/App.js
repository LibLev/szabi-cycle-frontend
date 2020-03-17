import React, {Component} from 'react';
import './App.css';
import NavBar from "./components/navbar/navbar";
import {Switch, Route} from "react-router-dom";
import Connection from "./components/connection/connection";
import allProduct from "./components/product/allProduct";
import newProduct from "./components/product/newProduct";

class App extends Component {


    render() {
        return (
            <div>
                <NavBar/>
                <Switch>
                    <Route path="/home" component={allProduct}/>
                    <Route path="/connection" component={Connection}/>
                    <Route path="/newProduct" component={newProduct}/>
                </Switch>
            </div>
        );
    }
}

export default App;
