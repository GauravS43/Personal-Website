import React from "react"
import sf from "./Images/sf.png"

function FeaturedProject({ toProject }) {
    return (
        <div className="f_proj">
            <div className="inner_f_proj animation left">
                <h2>Featured Project: Street Fighter Reinforcement Learning</h2>
                <div style={{ display: "flex", height: "80%" }}>
                    <div className="f_proj_left">
                        <img src={sf} alt="Featured Project" />
                    </div>
                    <div className="f_proj_right">
                        <div className="f_proj_text_container">
                            <h3>
                                Banditiis iure quam voluptate aperiam tempore molestias
                                nobis numquam, accusantium, ea dignissimos corrupti est
                                incidunt porro itaque. Dolorum eveniet eius ut modi eligendi
                                iusto vitae doloremque est fugit aperiam! Magni, mollitia dicta
                                labore, iure ducimus suscipit maxime rem magnam eaque et,
                                praesentium esse voluptatem! Placeat mollitia repudiandae
                                consequatur sapiente rerum. Tenetur numquam quisquam illum
                                sint quod, ducimus quo suscipit. Accusantium quis at recusandae
                                corporis, explicabo neque culpa doloribus? Quod totam quasi,
                                deleniti nulla consequatur omnis excepturi quidem facere, earum
                                dolorem facilis dolore praesentium consectetur dolor? Odio commodi
                                non molestias?
                            </h3>
                        </div>

                        <div className="link_container" style={{ width: "90%" }}>
                            <button onClick={toProject}>Projects</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export { FeaturedProject }