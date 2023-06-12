import React from "react"
import { Link } from 'react-router-dom';

export function Project({ proj_data, isFeatured, linkSite }) {
    return (
        <div className="project">
            <div className="inner_proj animation left">
                <h2>{proj_data[0]}</h2>
                <div className="date">
                    {proj_data[1]}
                </div>
                <div className="proj_flex">
                    <div className="proj_left">
                        <img src={proj_data[6]} alt="Project Img" />
                    </div>
                    <div className="proj_right">
                        <div className="proj_text_container">
                            <h3>
                                {proj_data[2]}
                            </h3>
                        </div>

                        <div className="link_container">
                            <a target="_blank" rel="noreferrer" href={proj_data[4]}>{proj_data[3]}</a>
                            {isFeatured && <Link reloadDocument to="../projects">Projects</Link>}
                            {linkSite && <a target="_blank" rel="noreferrer" href={proj_data[5]}>Website</a>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}