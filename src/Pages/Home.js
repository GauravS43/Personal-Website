import React from "react"
import { Header } from '../Components/header'
import { Modal } from '../Components/modal'
import { Introduction } from '../Components/introduction'
import { FeaturedProject } from '../Components/featured_project';
import { RecentPosts } from '../Components/recent_posts';
import { Footer } from '../Components/footer'



export function HomePage() {
    const [modal, setModal] = React.useState(0)

    function updateModal(post_num) {
        setModal(post_num);
    }

    return (
        <>
            < Header />
            <div className="inner_wrapper">
                < Modal display_state={modal} hideModal={() => updateModal(0)} />
                < Introduction />
                < FeaturedProject />
                < RecentPosts showModal={updateModal} />
                < Footer />
            </div>
        </>
    )
}
