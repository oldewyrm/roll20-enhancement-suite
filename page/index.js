import React from "react";
import ReactDOM from "react-dom";
import NavBar from 'NavBar.js';


function Index() {
    return (
        <div>
            <div className="column-flex main-content">

                <div className="column-flex top">

                    <div className="logo">
                        <img src="logo.svg" alt=""></img>
                    </div>

                    <div className="text-bg">
                        <h1 style={{ textAlign: "center" }}>Roll20 Enhancement Suite</h1>
                        <b>A quality of life and workflow extension for Roll20</b>

                        <div className="browser-icons">
                            <a href="https://addons.mozilla.org/en-US/firefox/addon/roll20-enhancement-suite/">
                                <img src="firefox.png" alt="" />
                            </a>

                            <a href="https://chrome.google.com/webstore/detail/roll20-enhancement-suite/fadcomaehamhdhekodcpiglabcjkepff">
                                <img src="chrome.png" alt="" />
                            </a>

                            <a href="https://github.com/SSStormy/roll20-enhancement-suite">
                                <img className="invert" src="github.png" alt="" />
                            </a>
                        </div>

                        <NavBar />
                    </div>
                </div>

                { /* for maintaing a center on the h1*/}
                <div className="bottom">
                </div>
            </div>
        </div >
    )
}

if(typeof(window) !== "undefined" && window.document) {
    ReactDOM.render(<Index />, document.getElementById("root"));
}

export default Index;
