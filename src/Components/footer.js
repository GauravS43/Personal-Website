import React from "react"
import github from "./Images/github.png"
import linkedin from "./Images/linkedin.png"

export function Footer() {
    return (
        <div className="footer">
            <div className="inner_footer">
                <div className="icons">
                    <a target={"_blank"} rel="noreferrer" href="https://www.linkedin.com/in/gauravs43/"><img src={linkedin} alt="logo"></img></a>
                    <a target={"_blank"} rel="noreferrer" href="https://github.com/gauravs43"><img src={github} alt="logo"></img></a>
                </div>
                <h4>© 2023 Gauravs.ca, All Rights Reserved</h4>
            </div>
        </div >
    )
}