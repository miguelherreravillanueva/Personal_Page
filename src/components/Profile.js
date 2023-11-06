
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProfileCard from "./ProfileCard";
import quiz from "../assets/img/quiz.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
// import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Profile = ({ projects, experience, education }) => {

    const projectsData = [
        {
            title: "Quiz",
            description: "Game App",
            imgUrl: quiz,
            url: "https://miguelherreravillanueva.github.io/Proyecto_Quiz/"
        },
        {
            title: "Shoe Shop",
            description: "Buy your bests shoes",
            imgUrl: projImg2,
        },
        {
            title: "Cosmetics e-commerce",
            description: "Care for your skin",
            imgUrl: projImg3,
        },
        {
            title: "Social Network",
            description: "Your trusted network",
            imgUrl: projImg3,
        },
    ];
    const experienceData = [
        {
            title: "Fullstack Teacher Assistant",
            description: "",
            imgUrl: projImg3,
            url: ""
        },
    ];

    const educationData = [
        {
            title: "IA & Innovation",
            description: "Máster",
            imgUrl: projImg3,
            url: ""
        },
        {
            title: "Fullstack MERN",
            description: "Máster",
            imgUrl: projImg2,
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
                                                                <ProfileCard
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
                                                                <ProfileCard
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
                                                                <ProfileCard
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