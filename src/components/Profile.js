
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import quiz from "../assets/img/quiz.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import thebridge from "../assets/img/thebridge.jpeg";
import founderz from "../assets/img/founderz.jpeg";
import social_network from "../assets/img/social_network.png";
import e_commerce from "../assets/img/e_commerce.png";
import newspage from "../assets/img/newspage.png";
import shoe_shop from "../assets/img/shoe_shop.png";
// import 'animate.css';
import TrackVisibility from 'react-on-screen';
import ExperienceCard from "./ExperienceCard";
import EducationCard from "./EducationCard";
import ProjectCard from "./ProjectCard";

const Profile = () => {

    const projectsData = [
        {
            title: "Quiz",
            description: "Game App",
            imgUrl: quiz,
            url: "https://miguelherreravillanueva.github.io/Proyecto_Quiz/"
        },
        {
            title: "ShoeShop",
            description: "Shoe e-commerce",
            imgUrl: shoe_shop,
            url: "https://react-e-commerce-shoeshop-asaxut7zg-miguelherreravillanueva.vercel.app/",
        },
        {
            title: "Freshly",
            description: "Cosmetic e-commerce",
            imgUrl: e_commerce,
            url: "https://proyecto-react-e-commerce.vercel.app/",
        },
        {
            title: "GapNet",
            description: "Social network",
            imgUrl: social_network,
            url: "https://proyecto-react-social-network-cbqfmmpy7-miguelherreravillanueva.vercel.app/",
        },
        {
            title: "World Today",
            description: "Newspage",
            imgUrl: newspage,
            url: "https://proyecto-react-newspage.vercel.app/list",
        },
    ];

    const experienceData = [
        {
            title: "Fullstack Teacher Assistant",
            subtitle: "EDEM-The Bridge, 2023",
            description: "Support for the Lead Instructor,technical and psychological assistance to students, exercise correction, and reporting of incidents.",
            imgUrl: thebridge,
            url: "https://edem.eu/",
        },
    ];

    const educationData = [
        {
            title: "IA & Innovation",
            subtitle: "Founderz, 2023",
            description: "Experience in AI, ethics, and chatbot development. Process automation and the creation of analysis tools using Low-Code.",
            imgUrl: founderz,
            url: "https://founderz.com/es",
        },
        {
            title: "Fullstack MERN",
            subtitle: "The Bridge | Digital Talent Accelerator, 2022-2023",
            description: "480h - HTML, CSS, JavaScript React.js (functional, hooks, testin(Jest), deplog yment, Node.js, Express,MongoDB, REST API, SQL, unit testing (Jest), Cloud, and DevOps (Jenkins).",
            imgUrl: thebridge,
            url: "https://www.thebridge.tech/",
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Profile</h2>
                                    <p>This is what I've done</p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Projects</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Experience</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Education</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        projectsData.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <Row>
                                                    {
                                                        experienceData.map((exp, index) => {
                                                            return (
                                                                <ExperienceCard
                                                                    key={index}
                                                                    {...exp}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <Row>
                                                    {
                                                        educationData.map((edu, index) => {
                                                            return (
                                                                <EducationCard
                                                                    key={index}
                                                                    {...edu}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}

export default Profile