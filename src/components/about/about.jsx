import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./about.css"

class About extends Component {

    componentDidMount() {
    }


    render() {
        return (
            <div className="container-sm" id="main-wrapper">
                <div className="card">
                    <div className="card-body">
                        <span>
                        2018-ban kezdtem el kerékpár felvásárlással és felújítással foglalkozni.<br/>
                        Időközben kapcsolatba kerültem néhány Olasz kerékpár kereskedővel is így most főleg használt Olasz kerékpárok behozatalával és felújításával foglalkozom.<br/>
                        <br/>
                        Főleg régebbi acél országúti kerékpárokkal foglalkozom, de MTB, Trekking valamint városi kerékpárok szerelésével is lehet hozzám fordulni.<br/>
                        <br/>
                        Amennyiben kérdésed van bármelyik termékkel kapcsolatban a "kapcsolat" rovaton keresztül tudod azt feltenni.<br/>
                        <br/>
                        Csévi Szabolcs
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;