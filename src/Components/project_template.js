import React from "react"
import { Link } from 'react-router-dom';

export function Project({ proj_data, isFeatured }) {
    return (
        <div className="project">
            <div className="inner_proj animation left">
                <h2>{proj_data.title}</h2>
                <div className="date">
                    {proj_data.date}
                </div>
                <div className="proj_flex">
                    <div className="proj_left">
                        <img src={proj_data.img} alt="Project Img" />
                    </div>
                    <div className="proj_right">
                        <div className="proj_text_container">
                            <h3>
                                {proj_data.desc}
                            </h3>
                        </div>

                        <div className="link_container">
                            {(proj_data.link_1 !== "") && <a target="_blank" rel="noreferrer" href={proj_data.url_1}>{proj_data.link_1}</a>}
                            {isFeatured && <Link reloadDocument to="../projects">More Projects</Link>}
                            {(!isFeatured && proj_data.link_2 !== "") && <a target="_blank" rel="noreferrer" href={proj_data.url_2}>{proj_data.link_2}</a>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}