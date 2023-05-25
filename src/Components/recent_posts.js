import React from "react"

function RecentBlog({ toBlog }) {
    return (
        <div className="r_blog" >
            <h2 className="animation">Recent Blog Posts</h2>
            <div className="inner_r_blog">
                <div className="blog_post animation">
                    <h3>Making a website!</h3>
                    <h4> A cupiditate? Perspiciatis, nesciunt? Labore, aut pariatur nam necessitatibus soluta ratione minus corporis cumque vero ducimus a, alias autem non et hic nemo culpa. Ipsam aperiam magnam qui vitae adipisci nesciunt consequuntur explicabo tenetur corporis ad at eligendi distinctio debitis dolorum hic fuga id rerum deleniti cum neque facere non esse, voluptates quasi. Consectetur impedit ipsa earum culpa! Veniam officia delectus aut, quaerat dolore dolores repellat maiores id minus harum expedita voluptatibus, placeat saepe autem!</h4>
                    <div className="whiteBox"></div>
                    <div className="enlarger">
                        <h2>Read more →</h2>
                    </div>
                </div>
                <div className="blog_post animation">
                    <h3>Title: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, officiis?</h3>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit provident velit impedit iusto consequatur rem harum vitae, esse animi maxime odio magni, inventore necessitatibus quibusdam officia cupiditate? Perspiciatis, nesciunt? Labore, aut pariatur nam necessitatibus soluta ratione minus corporis cumque vero ducimus a, alias autem non et hic nemo culpa. Ipsam aperiam magnam qui vitae adipisci nesciunt consequuntur explicabo tenetur corporis ad at eligendi distinctio debitis dolorum hic fuga id rerum deleniti cum neque facere non esse, voluptates quasi. Consectetur impedit ipsa earum culpa! Veniam officia delectus aut, quaerat dolore dolores repellat maiores id minus harum expedita voluptatibus, placeat saepe autem!</h4>
                    <div className="whiteBox"></div>
                    <div className="enlarger">
                        <h2>Read more →</h2>
                    </div>
                </div>
            </div>
            <div className="link_container animation">
                <button onClick={toBlog}>Blog</button>
            </div>
        </div>
    )
}

export { RecentBlog }