import React from "react"
import Gaurav from "./Images/Gaurav.webp"

function Introduction() {
    return (
        <div class="intro">
            <div class="inner_intro">
                <div class="intro_text_container">
                    <h2>
                        Hi, I'm Gaurav Sharma
                        <br></br>
                        Welcome to my website!
                    </h2>
                </div>

                <div class="intro_img_container">
                    <img src={Gaurav} alt="Gaurav Img" />
                </div>
            </div>
        </div >
    )
}

export { Introduction }