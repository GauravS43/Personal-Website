import React from "react"
import { Header } from '../Components/header'
import { Footer } from '../Components/footer'
import { Project } from "../Components/project_template";
import { SF_RL, PF_VIS, MAN_HL, TRIG_APP, MARIO_FPS, REAL_LAX, GNOME_HOMES } from "../Data/d_projects"

export function ProjectsPage() {
    return (
        <>
            < Header />
            <div className="inner_wrapper">
                <div id="scrollInform"></div>
                <div className="page_intro">
                    <h1>Projects</h1>
                </div>
                <div className="project_wrapper">
                    <Project proj_data={SF_RL} isFeatured={false} />
                </div>
                <div className="project_wrapper">
                    <Project proj_data={PF_VIS} isFeatured={false} />
                </div>
                <div className="project_wrapper">
                    <Project proj_data={MAN_HL} isFeatured={false} />
                </div>
                <div className="project_wrapper">
                    <Project proj_data={TRIG_APP} isFeatured={false} />
                </div>
                <div className="project_wrapper">
                    <Project proj_data={MARIO_FPS} isFeatured={false} />
                </div>
                <div className="project_wrapper">
                    <Project proj_data={REAL_LAX} isFeatured={false} />
                </div>
                <div className="project_wrapper">
                    <Project proj_data={GNOME_HOMES} isFeatured={false} />
                </div>
                < Footer />
            </div>
        </>
    )
}