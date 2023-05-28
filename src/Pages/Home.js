import React from "react"
import { Header } from '../Components/header'
import { Modal } from '../Components/modal'
import { Introduction } from '../Components/introduction'
import { FeaturedProject } from '../Components/featured_project';
import { RecentPosts } from '../Components/recent_posts';
import { Footer } from '../Components/footer'



export function HomePage() {
    const [modal, setModal] = React.useState(false)

    function updateModal() {
        console.log("changed");
        setModal(!modal);
    }

    return (
        <>
            < Header />
            <div className="inner_wrapper">
                < Modal display={modal} hideModal={updateModal} />
                < Introduction />
                < FeaturedProject />
                < RecentPosts showModal={updateModal} />
                < Footer />
            </div>
        </>
    )
}
