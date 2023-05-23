import React from "react"
import Gaurav from "./Images/Gaurav.webp"

window.onscroll = function () {
    document.getElementById("scrollInform").style.opacity = "0";
}

function Introduction() {
    return (
        <div class="intro">
            <div class="inner_intro">
                <div class="intro_left">
                    <div class="intro_text_container">
                        <h2 class="animation left">
                            Hi, I'm Gaurav Sharma.
                            <br></br>
                            Welcome to my website!
                        </h2>
                    </div>
                    <div class="link_container animation">
                        <a target={"_blank"} rel="noreferrer" href="https://www.linkedin.com/in/gauravs43/">LinkedIn</a>
                        <a target={"_blank"} rel="noreferrer" href="https://github.com/gauravs43">GitHub</a>
                    </div>
                </div>

                <div class="intro_img_container animation right">
                    <img src={Gaurav} alt="Gaurav Img" />
                </div>
            </div>
            <div class="scroll" id="scrollInform">
                <h3>Scroll</h3>
                <span></span>
            </div>
        </div >
    )
}

export { Introduction }