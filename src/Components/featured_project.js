import React from "react"
import { Project } from "./project_template"
import { PF_VIS } from "../Data/d_projects"

export function FeaturedProject() {
    return (
        <div className="f_proj">
            <h2 className="animation" style={{ marginBottom: "4vh" }}>Featured Project</h2>
            <Project proj_data={PF_VIS} isFeatured={true} linkSite={false} />
        </div >
    )
}