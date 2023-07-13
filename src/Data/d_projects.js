import sf_pic from "../Components/Images/sf_vs.png"
import pf_pic from "../Components/Images/pf_run.png"
import man_pic from "../Components/Images/manga.png"
import trig_pic from "../Components/Images/trig_test.png"
import mario_pic from "../Components/Images/mario.png"
import real_pic from "../Components/Images/real_lax.png"
import gnome_pic from "../Components/Images/gnome.png"

/*
var sample_project = [
    title: "",
    date: "",
    desc: "",
    link_1: "",
    url_1: "",
    link_2: "",
    url_2: "", 
    img: "", 
]
*/

var SF_RL = {
    title: "Street Fighter Reinforcement Learning",
    date: "05/23",
    desc: "Implemented an advanced workflow in Python utilizing Gym, Gym Retro, and Stable-Baselines3 to preprocess, fine-tune, and train a model for Street Fighter 2 Special Champion Edition (Sega Genesis). Leveraging Proximal Policy Optimization, the model underwent an extensive training phase of five million steps, with the in-game score serving as a reward function. Demonstrating exceptional performance, the model achieved a remarkable feat of consecutively winning nine matches or advancing to the challenging Dhalsim level in Ryu's arcade mode.",
    link_1: "Github",
    url_1: "https://github.com/GauravS43/Street-Fighter-Reinforcement-Learning",
    link_2: "",
    url_2: "",
    img: sf_pic
}

var PF_VIS = {
    title: "Path Finding Visualizer",
    date: "08/22",
    desc: "Compare different pathfinding algorithms in this interactive website independently developed using React.  Seven prominent pathfinding algorithms are featured, including Dijkstra, A Star (A*), Depth First Search (DFS) and Breadth First Search (BFS). Additionally, the user can generate mazes, place walls, or manipulate weights,  enabling a comprehensive understanding of the strengths and weaknesses of each algorithm. This website was prominently used in a seminar titled \"Enemy AI and Pathfinding\" for McMaster's Game Development Club.",
    link_1: "Github",
    url_1: "https://github.com/GauravS43/PathFindingVisualizer",
    link_2: "Website",
    url_2: "https://macgdcpath.netlify.app/",
    img: pf_pic
}

var MAN_HL = {
    title: "Manga Higher or Lower",
    date: "07/22",
    desc: "Test your Manga Knowledge on this website built in React. Choose which of two randomly selected manga has the higher popularity or rating based on MyAnimeList users. This web-based app utilizes a custom API built in Python using Flask that stores information on 2000 manga. The front end was independently created and designed based on the Higher Lower Game.",
    link_1: "Github",
    url_1: "https://github.com/GauravS43/MangaHigherLower",
    link_2: "Website",
    url_2: "https://mangahigherlower.netlify.app/",
    img: man_pic
}

var TRIG_APP = {
    title: "Trigonometry Helper App",
    date: "02/22 - 04/22",
    desc: "A multi-page web application on trigonometry developed with Elm for 'CS1XD3 - Intro to Software Design Using Web Programming'. Led a team of 4 other students, assembled the final build and independently developed the quiz section, integrating a diagram generation feature to foster enhanced user engagement and facilitate effective learning. Achieved a perfect grade of 100%.",
    link_1: "Github",
    url_1: "https://github.com/GauravS43/Trigonometry-Helper",
    link_2: "Website",
    url_2: "https://cs1xd3.online/ShowModulePublish?modulePublishId=a7e441bf-b01f-4921-b08d-42ae02f4318c&fullscreen=true",
    img: trig_pic
}


var MARIO_FPS = {
    title: "Mario FPS",
    date: "06/21",
    desc: "Independently conceptualized and developed a video game interpreting the Super Mario universe as a first-person shooter using C# in Unity. Features over twenty unique models, including three enemy types with ai and two weapon options for the player. Made for a personal project in Grade 12 Computer Engineering and received 100%.",
    link_1: "Github",
    url_1: "https://github.com/GauravS43/Mario_FPS",
    link_2: "",
    url_2: "",
    img: mario_pic
}

var REAL_LAX = {
    title: "Real-Lax App",
    date: "08/20",
    desc: "Collaborated with a team of four for the Spark from Home Hackathon to develop a mock-up app to provide easily accessible mental health resources. Conducted extensive research on accessible app design to ensure a user-friendly experience. Independently created the app's design using Marvel.",
    link_1: "Prototype",
    url_1: "https://marvelapp.com/prototype/ejj63dh/screen/71856307",
    link_2: "",
    url_2: "",
    img: real_pic
}

var GNOME_HOMES = {
    title: "Gnome Homes",
    date: "12/19",
    desc: "Collaborated with a team of five for the Spark Hackathon to create a proposal for a sustainable and affordable homes. Proposal centered around upgrading tiny houses with sustainable features and smart appliances to montior use of resources. Played a key role developing an app in MIT app inventor to display real-time information from the appliances, providing homeowners with insights on energy consumption, water usage, and other key metrics.",
    link_1: "",
    url_1: "",
    link_2: "",
    url_2: "",
    img: gnome_pic
}


export { SF_RL, PF_VIS, MAN_HL, TRIG_APP, MARIO_FPS, REAL_LAX, GNOME_HOMES }