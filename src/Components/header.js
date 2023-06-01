import React from "react"
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <div className="header">
            <div className="inner_header">
                <div className="initials_container">
                    <a href="/home"><h1> GS </h1></a>
                </div>

                <ul className="navigation">
                    <Link reloadDocument to="../home"><li>Home</li></Link>
                    <Link reloadDocument to="../projects"><li>Projects</li></Link>
                    <Link reloadDocument to="../blog"><li>Blog</li></Link>
                </ul>
            </div>
        </div >
    )
}