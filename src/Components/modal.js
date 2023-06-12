import React from "react";

export function Modal({ display_state, hideModal }) {
    let modal_style = (display_state > 0) ? { display: "block" } : { display: "none" };

    let title = ["Making a Website!"];

    return (
        <div className="modal_wrapper" style={modal_style} onClick={hideModal}>
            <div className="inner_modal">
                <h2>{title[display_state - 1]}</h2>
                <div className="modal_text_container">
                    {
                        display_state === 1 &&
                        <h3>
                            Creating a website, and by extension a blog, can be an intimidating endeavor. It requires consistent maintenance and updates, as well as the dedication to share new content regularly. But it is for this reason that I believe that building a website is a rewarding experience. In this blog post, I will delve into my recent journey of creating a website using React, reflecting on past projects, and exploring the exciting possibilities that lie ahead.
                            <br></br><br></br>
                            After completing my second year of university, I found myself with a renewed mindset and a desire to revisit my old projects. However, I realized that my familiarity with React had faded over time. To reacquaint myself with the framework and breathe new life into my projects, I decided to build a website using React.
                            <br></br><br></br>
                            As someone who has worked with HTML, CSS, and JavaScript, I firmly believe that React is the ideal choice for this website. Its component-based nature and my prior experience with the language make updating the website with new projects a breeze, without diving too deep into html tags and other code.
                            <br></br><br></br>
                            To facilitate easy updates, I employed two essential components: the Project and Post components, found in the project_template.js and post_template.js files, respectively. By passing parameters through these components, I can effortlessly add new projects and blog posts, maintaining a dynamic and engaging website.
                            <br></br><br></br>
                            Overall, the website creation process itself is a delightful and creative journey. I embrace my artistic side and pay attention to intricate details, such as choosing the perfect color palette. Moreover, this experience serves as a valuable learning opportunity, as I improve the scalability of my website—a knowledge I intend to apply to my previous projects.
                            <br></br><br></br>
                            Creating a website using React has been an enriching experience. It has allowed me to reconnect with my past projects, unlock my creativity, and embrace the power of React's component-based architecture. I look forward to the exciting road ahead as I continue to evolve my website and share my knowledge and insights in future blog posts.
                        </h3>
                    }
                </div>
            </div>
        </div>
    )
}