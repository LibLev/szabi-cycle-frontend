import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import NavBar from "./components/navbar/navbar";
import {Route, BrowserRouter as Router} from "react-router-dom";
import Connection from "./components/connection/connection";
import allBicycle from "./components/product/bicycle/allBicycleCard";
import allComponent from "./components/product/component/allComponentCard";
import about from "./components/about/about"
import bicyclePage from "./components/product/bicycle/bicyclePage"
import allRoadBicycleCard from "./components/product/bicycle/allRoadBicycleCard";
import allCityBicycleCard from "./components/product/bicycle/allCityBicycleCard";
import allCyclecrossBicycleCard from "./components/product/bicycle/allCyclecrossBicycleCard";
import allGravelBicycleCard from "./components/product/bicycle/allGravelBicycleCard";
import allMTBBicycleCard from "./components/product/bicycle/allMTBBicycleCard";
import allTrackBicycleCard from "./components/product/bicycle/allTrackBicycleCard";
import allTrekkingBicycleCard from "./components/product/bicycle/allTrekkingBicyleCard";
import BartapeCards from "./components/product/component/bartapeCards";
import BreakCards from "./components/product/component/breakCards";
import CalliperCards from "./components/product/component/calliperCards";
import CranksetCards from "./components/product/component/cranksetCards";
import ForkCards from "./components/product/component/forkCards";
import FrameCards from "./components/product/component/frameCards";
import GroupsetCards from "./components/product/component/groupsetCards";
import HandlebarCards from "./components/product/component/handlebarCards";
import PedalCards from "./components/product/component/pedalCards";
import SaddleCards from "./components/product/component/saddleCards";
import SeatPostCards from "./components/product/component/seatPostCards";
import ShifterCards from "./components/product/component/shifterCards";
import StemCards from "./components/product/component/stemCards";
import WheelCards from "./components/product/component/wheelCards";
import MainPage from "./components/mainPage";
import Footer from "./components/footer";
import ComponentPage from "./components/product/component/componentPage";

class App extends Component {


    render() {
        return (
                <div>
                    <NavBar/>
                    <div className="container-md" style={{marginTop: "30px"}}>
                        <Router>
                            <Route path="/allbicycle" component={allBicycle}/>
                            <Route path="/bicycles/road" component={allRoadBicycleCard}/>
                            <Route path="/bicycles/mtb" component={allMTBBicycleCard}/>
                            <Route path="/bicycles/cx" component={allCyclecrossBicycleCard}/>
                            <Route path="/bicycles/gravel" component={allGravelBicycleCard}/>
                            <Route path="/bicycles/track" component={allTrackBicycleCard}/>
                            <Route path="/bicycles/trekking" component={allTrekkingBicycleCard}/>
                            <Route path="/bicycles/city" component={allCityBicycleCard}/>
                            <Route path="/allcomponent" component={allComponent}/>
                            <Route path="/components/bartape" component={BartapeCards}/>
                            <Route path="/components/break" component={BreakCards}/>
                            <Route path="/components/calliper" component={CalliperCards}/>
                            <Route path="/components/crankset" component={CranksetCards}/>
                            <Route path="/components/fork" component={ForkCards}/>
                            <Route path="/components/frame" component={FrameCards}/>
                            <Route path="/components/groupset" component={GroupsetCards}/>
                            <Route path="/components/handlebar" component={HandlebarCards}/>
                            <Route path="/components/pedal" component={PedalCards}/>
                            <Route path="/components/saddle" component={SaddleCards}/>
                            <Route path="/components/seatpost" component={SeatPostCards}/>
                            <Route path="/components/shifter" component={ShifterCards}/>
                            <Route path="/components/stem" component={StemCards}/>
                            <Route path="/components/wheel" component={WheelCards}/>
                            <Route path="/connection" component={Connection}/>
                            <Route path="/bicycle" component={bicyclePage}/>
                            <Route path="/component" component={ComponentPage}/>
                            <Route path="/about" component={about}/>
                            <Route path="/home" component={MainPage}/>
                        </Router>
                    </div>
                    <Footer/>
                </div>
        );
    }
}

export default App;
