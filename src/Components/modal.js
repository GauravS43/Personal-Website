import React from "react";

export function Modal({ display_state, hideModal }) {
    let modal_style = (display_state > 0) ? { display: "block" } : { display: "none" };

    let title = [
        "Making a Website!",
        "Reinforcement Learning SF2",
        "Algorithms Galore",
    ];

    return (
        <div className="modal_wrapper" style={modal_style} onClick={hideModal}>
            <div className="inner_modal">
                <h2>{title[display_state - 1]}</h2>
                <div className="modal_text_container">
                    {
                        display_state === 1 &&
                        <h3>
                            Creating a website and a blog can be an intimidating endeavour. It requires consistent updates alongside the dedication to share new content regularly. But it is for this reason that I believe that building a website is a rewarding experience. In this blog post, I will delve into my recent journey of creating a website using React, reflecting on past projects, and exploring exciting possibilities in the future.
                            <br></br><br></br>
                            After completing my second year of university, I found myself with a renewed mindset and a desire to revisit my old projects. However, I realized that my familiarity with React had faded over time. To reacquaint myself with the framework and breathe new life into my projects, I decided to build a website using React.
                            <br></br><br></br>
                            As someone who has worked with HTML, CSS, and JavaScript, I firmly believe React is the ideal choice for this website. Its component-based nature and my prior experience with the language allow me to update the most dynamic parts of the website without diving too deep into HTML tags and other code.
                            <br></br><br></br>
                            To facilitate easy updates, I created two essential components in the project_template.js and post_template.js files. I can effortlessly add new projects and blog posts by passing parameters through the "project" and "post" components, maintaining an active and engaging website.
                            <br></br><br></br>
                            Overall, the website creation process itself is a delightful and creative journey. I embrace my artistic side and pay attention to intricate details, such as choosing the perfect colour palette. Moreover, this experience served as a valuable learning opportunity, as I improved my understanding of website scalability — a knowledge I intend to apply to my previous projects.
                            <br></br><br></br>
                            Creating a website using React has been an enriching experience. It has allowed me to reconnect with my past projects, unlock my creativity, and embrace the power of React's component-based architecture. I look forward to the exciting road ahead as I continue to evolve my website and share my knowledge and insights in future blog posts.
                        </h3>
                    }

                    {
                        display_state === 2 &&
                        <h3>
                            As my first machine learning project, I wanted to approach the material in a way that would ignite and sustain my interest in the subject for the duration of the project. Inspired by Youtube videos of machine learning models learning and eventually beating retro video games, I knew I had found the perfect project. In this blog post, I will discuss my inspirations for this project, learning machine learning, and the difficulties in training the model.
                            <br></br><br></br>
                            With the emerging importance of machine learning in computer science, I wanted to do a project involving it. However, with it being far more abstract than my other projects, I initially didn't have a clear idea for a project. But that quickly changed when I found the Youtube video, "MarI/O - Machine Learning for Video Games." The video displayed a model trained through a Neurological Evolution of Augmenting Topologies (NEAT) algorithm playing Super Mario World. From there, I knew an avenue to use machine learning.
                            <br></br><br></br>
                            Having solidified an idea, I quickly decided to make a model for Street Fighter 2, an iconic fighting game. At this early stage of the project, I was using Bizhawk and Lua to create the model, emulating the same methods showcased in the Youtube video. This earlier code can be found as "early_NEAT_run.lua" on the project's GitHub page. Although I made progress, I reached a point where the model lacked satisfactory results and would not improve further. Ultimately I decided not to continue with Bizhawk and Lua as I felt my learning plateaued. I then switched to Python using another Youtube video, "Build a Street Fighter AI Model with Python | Gaming Reinforcement Learning Full Course" as a basis.
                            <br></br><br></br>
                            In contrast to the archaic Bizhawk emulator, primarily designed for tool-assisted speedrunning, Python proved to be a much more accessible choice for machine learning. Libraries such as StableBaselines3 and Gym Retro considerably streamlined the development process. Gym Retro's documentation even references and provides links to resources on Proximal Policy Optimization (PPO). Despite this, the process of learning PPO was more challenging than NEAT. The latter felt approachable due to its similarities with biological evolution, whereas PPO lacked a real-world equivalent. I plan to delve deeper into my experiences with both algorithms in my next blog post. However, I can confidently say that Python's rich library ecosystem made PPO easier to implement than NEAT.
                            <br></br><br></br>
                            Overall, this project has not only introduced me to various machine learning algorithms but also established a robust framework that I intend to utilize in future endeavours. With Gym Retro's ability to host a variety of retro games, I plan to tackle other iconic titles in the future while strengthening my understanding of machine learning.
                        </h3>
                    }

                    {
                        display_state === 3 &&
                        <h3>
                            In my recent project, I worked with machine learning for the first time. In particular, I used Proximal Policy Optimization (PPO) to train a model to play Street Fighter 2. In the process, I learned about and tested various machine learning algorithms, like the Neurological Evolution of Augmenting Topologies (NEAT). Although PPO and NEAT serve the same purpose, they differ significantly. In this blog post, I will discuss machine learning and explore the differences between PPO and NEAT.
                            <br></br><br></br>
                            Before my first project, I viewed machine learning as a confusing field filled with technical jargon. Several terms are used seemingly interchangeably for no apparent reason, like 'deep' learning and 'reinforcement' learning. However, in actuality, these terms are a specific subset of machine learning. Deep learning primarily focuses on neural networks, whereas reinforcement learning focuses on rewarding the actions of an agent in an environment and being tested in the same environment. Machine learning encompasses these terms and extends to other algorithms. A traditional machine learning algorithm utilizes training and testing datasets.
                            <br></br><br></br>
                            These categorizations are not mutually exclusive as PPO is an algorithm that combines aspects of deep and reinforcement learning, making it a deep reinforcement learning algorithm. It revolves around creating a policy, a set of parameters or weights for a neural network. PPO stands out due to its stability, achieved by clipping the advantage. The advantage represents the comparison between a potential action and the average action. Clipping the action ensures the model only considers actions within a specific range, preventing the model from making drastic choices that may lead to diminishing rewards.
                            <br></br><br></br>
                            On the other hand, despite NEAT containing neural networks and reinforcement, it is considered a neuroevolutionary algorithm. Unlike traditional neural networks that primarily adjust weights, NEAT evolves the network structure itself by modifying connections between nodes and introducing new nodes. NEAT starts with multiple slightly different instances of a simple neural network evaluates each network, then breeds the best-performing instances and mutates them. Through this iterative process, NEAT gradually develops a complex neural network.
                            <br></br><br></br>
                            Overall, learning machine learning has been a rewarding experience. Through it, I've learned a great deal about machine learning, the specifics of some algorithms, and how these algorithms differ. Namely, PPO focuses on creating a stable policy whereas NEAT evolves a neural network. Personally, NEAT was easier to understand due to its resemblance to natural selection. Sadly, I couldn't do the project with NEAT but I hope to work with the algorithm in the future.
                        </h3>
                    }

                    {
                        display_state === 4 &&
                        <h3>
                            Manga Higher or Lower was my first experience working with React. Because of this, I anticipated encountering numerous flaws upon revisiting the project. Yet, to my surprise, my code has held up better than expected. In this blog post, I will discuss my experience of revisiting Manga Higher or Lower, implementing difficulties, improving and solving minor issues.
                            <br></br><br></br>
                            When I first finished this project and showed it to friends, I would often get complaints about the difficulty. Many found it discouraging when they were tasked with comparing the popularity/score of two unknown manga, especially after accumulating a big score. I found this to be a part of the game's charm, the fun of guessing which manga was more popular or acclaimed based on the title alone. Nevertheless, I added difficulty options to satisfy my friends' requests. The three difficulty options, Easy, Medium, and Hard, correspond to a different pool of manga that the game randomly selects from. The more challenging difficulties have a bigger dataset comprised of more obscure manga. Specifically, Easy features 100 of the most popular manga, Medium expands it to 500 titles, and Difficult challenges users with 2000 manga.
                            <br></br><br></br>
                            Another significant change I implemented focused on an edge case that would be extremely difficult to reach in regular gameplay. In the original version, it was impossible to encounter the same manga twice within a single play session. While this was not a significant concern with 2000 manga, it became evident that the smaller pools introduced with the difficulties could be quickly exhausted. To address this, I modified the algorithm so that if 90% of manga is exhausted, it refreshes, allowing the users to encounter previously seen titles again. This adjustment resolves a possible catastrophic issue and ensures that players can play however long they want.
                            <br></br><br></br>
                            In addition to these substantial modifications, I made minor adjustments to the website's scalability. I anticipated scaling to be a much larger issue due to my lack of experience when initially working on this project. However, this wasn't true as my previous scaling implementations were nearly perfect, with only minor adjustments needed for tiny devices and ultrawide monitors.
                            <br></br><br></br>
                            Revisiting Manga Higher Lower has provided a sense of completion. Despite this, I didn't complete everything I set out to do. I originally wanted to update the dataset of manga acquired from web scraping MyAnimeList. However, I couldn't do so because of new restrictions against web scraping on MyAnimeList. Regardless, I am confident this website is finished because this version represents the best possible iteration of the project, and I am satisfied with its current state.
                        </h3>
                    }
                </div>
            </div>
        </div>
    )
}