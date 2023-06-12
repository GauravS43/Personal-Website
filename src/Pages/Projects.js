import React from "react"
import { Header } from '../Components/header'
import { Footer } from '../Components/footer'
import { Project } from "../Components/project_template";
import { SF_RL, PF_VIS, MAN_HL, TRIG_APP } from "../Data/d_projects"

export function ProjectsPage() {
    return (
        <>
            < Header />
            <div className="inner_wrapper">
                <div id="scrollInform"></div>
                <div className="page_intro">
                    <h1>Projects</h1>
                </div>
                <Project proj_data={SF_RL} isFeatured={false} linkSite={false} />
                <Project proj_data={PF_VIS} isFeatured={false} linkSite={true} />
                <Project proj_data={MAN_HL} isFeatured={false} linkSite={true} />
                <Project proj_data={TRIG_APP} isFeatured={false} linkSite={true} />
                < Footer />
            </div>
        </>
    )
}