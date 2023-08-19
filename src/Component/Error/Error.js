import React from "react";
import "./Error.css";


const Error = () => {
    return (
        <div className="error-sec">
            <div id="background"></div>
            <div className="top">
                <h1 className="erroe-h1">404</h1>
                <h3 className="erroe-h3">page not found</h3>
            </div>
            <div className="container">
                <div className="ghost-copy">
                    <div className="on-e"></div>
                    <div className="tw-o"></div>
                    <div className="thre-e"></div>
                    <div className="fou-r"></div>
                </div>
                <div className="ghost">
                    <div className="face">
                        <div className="eye"></div>
                        <div className="eye-right"></div>
                        <div className="mouth"></div>
                    </div>
                </div>
                <div className="shadow"></div>
            </div>
            <div className="bottom">
                <p className="boo">Boo, looks like a ghost stole this page!</p>
               
                <div className="buttons">
                   <a href="/home"> <button className="btn">Home</button> </a>
                </div>
            </div>

        </div>
    );
}

export default Error;