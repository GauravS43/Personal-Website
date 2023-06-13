import React from "react";

export function Modal({ display_state, hideModal }) {
    let modal_style = (display_state > 0) ? { display: "block" } : { display: "none" };

    let title = ["Making a Website!", "Making Street Fighter Reinforcment Learning."];

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

                    {
                        display_state === 2 &&
                        <h3>
                            As my first machine learning project, I wanted to approach the material in a way that would ignite and sustain my interest in the subject for the duration of the project. Inspired by Youtube videos of machine learning models learning and eventually beating retro video games, I knew I had found the perfect project. In this blog post, I will discuss my inspirations for this project, the process of learning machine learning, and the difficulties in training the model.
                            <br></br><br></br>
                            With the emerging importance of machine learning in computer science, I wanted to do a project involving it. However, with it being far more abstract than my other projects, I initially didn’t have a strong idea for a project. But that quickly changed when I found the Youtube video, “MarI/O - Machine Learning for Video Games,” which displayed a model trained through Neurological Evolution of Augmenting Topologies (NEAT) playing Super Mario World. From there, I knew I had to do something similar.
                            <br></br><br></br>
                            Having solidified an idea, I quickly decided to create a model for Street Fighter 2 as it was an iconic retro game that wasn’t a platformer. At this early stage of the project, I was using Bizhawk and Lua to create the model, emulating the same methods showcased in the Youtube video. A lot of this earlier code can be found as “early_NEAT_run.lua” on the project’s GitHub page. Although I made progress, I reached a point where the model lacked satisfactory results and would not improve further. Ultimately I decided not to continue with Bizhawk and Lua as I felt my learning plateaued. I then made the dramatic switch to Python using another Youtube video, “Build a Street Fighter AI Model with Python | Gaming Reinforcement Learning Full Course” as a basis.
                            <br></br><br></br>
                            In contrast to the archaic Bizhawk emulator, primarily designed for tool-assisted speedrunning, Python proved to be a much more accessible choice for machine learning. Libraries such as StableBaselines3 and Gym Retro greatly streamlined the development process. In fact, Gym Retro's documentation even references and provides links to resources on Proximal Policy Optimization (PPO). Despite this, the process of learning PPO was more challenging than NEAT. The latter felt more approachable due to its similarities with biological evolution, whereas PPO lacked a real-world equivalent. I plan to delve deeper into my experiences with both algorithms in my next blog post. However, I can confidently say that Python's rich library ecosystem made PPO easier to implement than NEAT.
                            <br></br><br></br>
                            Overall, this project has not only introduced me to various machine learning algorithms but also established a robust framework that I intend to utilize in future endeavors. With Gym Retro's ability to host a variety of retro games, I plan to tackle other iconic titles in the future while strengthening my understanding of machine learning.
                        </h3>
                    }
                </div>
            </div>
        </div>
    )
}