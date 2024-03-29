import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{faInstagram} from "@fortawesome/free-brands-svg-icons";
import{faFacebook} from "@fortawesome/free-brands-svg-icons";

class Footer extends Component{

    openInstagram = () => {
        window.open("https://www.instagram.com/szabicycle/");
    }

    openFacebook = () => {
        window.open("https://www.facebook.com/SzabiCycle-106486874875987");
    }

    render() {
        return(
            <div className="footer-basic">
                <footer>
                    <div className="social">
                        <a onClick={this.openInstagram}><FontAwesomeIcon icon={faInstagram}/></a>
                        <a onClick={this.openFacebook}><FontAwesomeIcon icon={faFacebook}/></a>
                    </div>
                    <ul className="list-inline">
                        <li className="list-inline-item"><a href="/home">Főoldal</a></li>
                        <li className="list-inline-item"><a href="/connection">Kapcsolat</a></li>
                        <li className="list-inline-item"><a href="/about">Rólunk</a></li>
                    </ul>
                    <p className="copyright">SzabiCycle © 2021</p>
                </footer>
            </div>
        )
    }
}

export default Footer;