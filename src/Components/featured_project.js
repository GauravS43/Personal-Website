import React from "react"
import { Project } from "./project_template"
import sf from "./Images/sf.png"
import { SF_project } from "../Data/d_projects"

export function FeaturedProject() {
    return (
        <div className="f_proj">
            <h2 className="animation" style={{ marginBottom: "4vh" }}>Featured Project</h2>
            <Project proj_data={SF_project} img={sf} isFeatured={true} />
        </div >
    )
}