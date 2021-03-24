import React from 'react'
import ReactDOM from 'react-dom'

import NavBar from 'NavBar.js'
import GTag from 'GTag.js'
import {Config} from "../src/utils/Config";

function Chrome() {

    return (
        <div>
            <NavBar />

            <div className="container">
                <h1>Chrome Store</h1>
                <hr style={{ marginTop: "0" }} />

                <p>The extension was previously taken down from the Chrome store, but it is now back online.</p>
                <p>To reduce the likelihood of this happening again, the extension is unlisted and available to Patrons of any tier.</p>

                <a href="https://www.patreon.com/posts/extension-is-on-49155538" rel="noopener noreferrer">
                  <img src="patreon.webp" alt="Become a Patron & Get link" style={{width: "217px", height: "51px"}}/>
                </a>

                <hr/>

                <h2>Manual Installation</h2>

                <p>As of 2019-09-30, the extension has been taken down from the Chrome Web Store in fear of copyright violation.</p>

                <p>The original takedown statement can be read <a href="takedown.png">here.</a></p>
                <p>Installing the extension is still possible but convoluted.</p>
                <p>We recommend using Firefox to avoid the extra steps.</p>

                <p><b>Beware that auto-updates will not be available while using this method.</b></p>

                <ul>
                    <li>1. <a href={`https://github.com/justas-d/roll20-enhancement-suite/raw/master/page/r20es_${LATEST_CHROME_VERSION}_chrome.zip`}>Download the extension here</a> ({`last updated on ${CHROME_LAST_UPDATE_TIME}, version ${LATEST_CHROME_VERSION})`}</li>
                    <li>2. Extract the zip file somewhere permanent.</li>
                    <li title="Chrome doesn't allow making hyperlinks to these special URLs :(">3. Copy & Paste <span style={{backgroundColor: "#ddd"}}>chrome://extensions</span> into the URL bar and press enter.</li>
                    <li>4. Enable "Developer Mode" in the top right.</li>
                    <li>5. Click "Load unpacked" in the top left.</li>
                    <li>6. Select the extracted extension folder and click the "Open"/"Select" button</li>
                    <li>7. Make sure to not delete the extension folder as that will remove the extension.</li>
                </ul>


            </div>

            <GTag/>
        </div>
    );
}

if(typeof(window) !== "undefined" && window.document) {
    ReactDOM.render(<Chrome/>, document.getElementById("root"));
}

export default Chrome;


