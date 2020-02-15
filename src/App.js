import React, {Component} from 'react';
import './App.css';
import NavBar from "./components/navbar/navbar";
import {Switch, Route} from "react-router-dom";
import Home from "./components/home/home";
import Connection from "./components/connection/connection"
import Bicycle from "./components/product/bicycle/product";


class App extends Component {


    render() {
        return (
            <div>
                <NavBar/>
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/connection" component={Connection}/>
                    <Route path="/bicycles" component={Bicycle}/>
                </Switch>
            </div>
        );
    }
}

export default App;
