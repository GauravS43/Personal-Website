import React from "react"
import Gaurav from "./Images/Gaurav.webp"

// window.onscroll = function () {
//     document.getElementById("scrollInform").style.opacity = "0";
// }

export function Introduction() {
    return (
        <div className="intro">
            <div className="inner_intro">
                <div className="intro_left">
                    <div className="intro_text_container">
                        <h2 className="animation left">
                            Hi, I'm Gaurav Sharma.
                            <br></br>
                            Welcome to my website!
                        </h2>
                    </div>
                    <div className="link_container animation">
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/gauravs43/">LinkedIn</a>
                        <a target="_blank" rel="noreferrer" href="https://github.com/gauravs43">GitHub</a>
                    </div>
                </div>

                <div className="intro_img_container animation right">
                    <img src={Gaurav} alt="Gaurav Img" />
                </div>
            </div>
            {/*<div className="scroll" id="scrollInform">
                <h3>Scroll</h3>
                <span></span>
            </div>*/}
        </div >
    )
}