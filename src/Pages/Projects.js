import React from "react"
import { Header } from '../Components/header'
import { Footer } from '../Components/footer'
import { Project } from "../Components/project_template";
import { SF_project } from "../Data/d_projects"
import sf from "../Components/Images/sf.png"

export function ProjectsPage() {
    return (
        <>
            < Header />
            <div className="inner_wrapper">
                <div id="scrollInform"></div>
                <div className="page_intro">
                    <h1>Projects</h1>
                </div>
                <Project proj_data={SF_project} img={sf} isFeatured={false} />
                <Project proj_data={SF_project} img={sf} isFeatured={false} />
                <Project proj_data={SF_project} img={sf} isFeatured={false} />
                <Project proj_data={SF_project} img={sf} isFeatured={false} />
                <Project proj_data={SF_project} img={sf} isFeatured={false} />
                < Footer />
            </div>
        </>
    )
}