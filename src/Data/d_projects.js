import sf_pic from "../Components/Images/sf_vs.png"
import pf_pic from "../Components/Images/pf_run.png"
import man_pic from "../Components/Images/manga.png"
import trig_pic from "../Components/Images/trig_test.png"

/*
let sample_project = [
    title,
    date,
    text,
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus turpis vitae accumsan condimentum. Praesent congue vel quam in blandit. Morbi in nibh elementum, aliquet libero eget, condimentum risus. Donec sagittis, sem nec volutpat sodales, tortor quam venenatis turpis, vitae fringilla elit lectus et lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam id ornare justo, et suscipit erat. Praesent sodales nec magna fringilla fringilla. Maecenas interdum ante quis massa sagittis, eu molestie magna molestie. Morbi porta pharetra pretium. Phasellus eu mi dictum, vestibulum lectus nec, sagittis est. Curabitur vitae eleifend elit."
    link title,
    link URL,
    website link (only if project is a website),
    image, 
]
*/

let SF_RL = [
    "Street Fighter Reinforcement Learning",
    "05/23",
    "Implemented an advanced workflow in Python utilizing Gym, Gym Retro, and Stable-Baselines3 to preprocess, fine-tune, and train a model for Street Fighter 2 Special Champion Edition (Sega Genesis). Leveraging Proximal Policy Optimization, the model underwent an extensive training phase of five million steps, with the in-game score serving as a reward function. Demonstrating exceptional performance, the model achieved a remarkable feat of consecutively winning nine matches or advancing to the challenging Dhalsim level in Ryu's arcade mode.",
    "Github",
    "https://github.com/GauravS43/Street-Fighter-Reinforcement-Learning",
    "*",
    sf_pic
]

let PF_VIS = [
    "Path Finding Visualizer",
    "08/22",
    "Compare different pathfinding algorithms in this interactive website independently developed using React.  Seven prominent pathfinding algorithms are featured, including Dijkstra, A Star (A*), Depth First Search (DFS) and Breadth First Search (BFS). Additionally, the user can generate mazes, place walls, or manipulate weights,  enabling a comprehensive understanding of the strengths and weaknesses of each algorithm. This website was prominently used in a seminar titled \"Enemy AI and Pathfinding\" for McMaster's Game Development Club.",
    "Github",
    "https://github.com/GauravS43/PathFindingVisualizer",
    "https://macgdcpath.netlify.app/",
    pf_pic
]

let MAN_HL = [
    "Manga Higher or Lower",
    "07/22",
    "Test your Manga Knowledge on this website built in React. Choose which of two randomly selected manga has the higher popularity or rating based on MyAnimeList users. This web-based app utilizes a custom API built in Python using Flask that stores information on 2000 manga. The front end was independently created and designed based on the Higher Lower Game.",
    "Github",
    "https://github.com/GauravS43/MangaHigherLower",
    "https://mangahigherlower.netlify.app/",
    man_pic
]

let TRIG_APP = [
    "Trigonometry Helper App",
    "02/22 - 04/22",
    "A multi-page web application on trigonometry developed with Elm for 'CS1XD3 - Intro to Software Design Using Web Programming'. Led a team of 4 other students, assembled the final build and independently developed the quiz section, integrating a diagram generation feature to foster enhanced user engagement and facilitate effective learning.",
    "Github",
    "https://github.com/GauravS43/Trigonometry-Helper",
    "https://cs1xd3.online/ShowModulePublish?modulePublishId=a7e441bf-b01f-4921-b08d-42ae02f4318c&fullscreen=true",
    trig_pic
]

let MARIO_FPS = [
    "Mario FPS",
    "06/21",
    "",
    "Video",
    "",
    "*",
    sf_pic
]


export { SF_RL, PF_VIS, MAN_HL, TRIG_APP, MARIO_FPS }