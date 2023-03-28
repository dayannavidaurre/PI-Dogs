import React from "react";
import {Link} from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () =>{
    return(
        <div className="landingPage">
            <div className="landing-img">
            </div>
            <div className="landing-text">
             <h1>Welcome</h1>
             <p>A house with dogs is a complete home.</p>
             <Link to="/home">
                <button>Lets go</button>
             </Link>
            </div>
        </div>
    )
};

export default LandingPage;
