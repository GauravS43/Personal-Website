import React from "react"

export function Project({ proj_data, img, isFeatured }) {
    return (
        <div className="project">
            <div className="inner_proj animation left">
                <h2>{proj_data[0]}</h2>
                <div className="date">
                    {proj_data[1]}
                </div>
                <div className="proj_flex">
                    <div className="proj_left">
                        <img src={img} alt="Project Img" />
                    </div>
                    <div className="proj_right">
                        <div className="proj_text_container">
                            <h3>
                                {proj_data[2]}
                            </h3>
                        </div>

                        <div className="link_container">
                            <a target="_blank" rel="noreferrer" href={proj_data[3]}>Github</a>
                            {isFeatured && <a href="/projects">Projects</a>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}