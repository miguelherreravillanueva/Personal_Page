import React from 'react'
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import taekwondo from "../assets/img/taekwondo.png";
import scouts from "../assets/img/scouts.png";
import fragmenta from "../assets/img/fragmenta.png";
import starbucks from "../assets/img/starbucks.png";
import ub from "../assets/img/ub.png";
import uned from "../assets/img/uned.png";
import TrackVisibility from 'react-on-screen';
import ExperienceCard from "./ExperienceCard";
import EducationCard from "./EducationCard";
import ProjectCard from "./ProjectCard";

const Background = () => {
    const projectsData = [
        {
            title: "Taekwondo",
            description: "Black belt taekwondo lover",
            imgUrl: taekwondo,
        },
        {
            title: "Scouts",
            description: "Grupo Scouts La Salle 214",
            imgUrl: scouts,
        },
    ];

    const experienceData = [
        {
            title: "Translator & Proofreader",
            subtitle: "Fragmenta Editorial, 2019",
            description: "Text spelling and translation corrections in Spanish and Catalan, incorporation of edits, bibliography correction, text formatting, order management, customer registration, communication support, customer service, and general management.",
            imgUrl: fragmenta,
        },
        {
            title: "Shift Supervisor",
            subtitle: "Starbucks Coffee Company, 2011-2021",
            description: "Supervise daily operations, lead the barista team, ensure service quality, manage personnel, prepare orders, and maintain cleanliness and presentation standards.",
            imgUrl: starbucks,
        },
    ];

    const educationData = [
        {
            title: "Editing & Proofreading ",
            subtitle: "Universitat Oberta de Catalunya UNED, 2020-2021",
            description: "Specialized training on the editing and correction processes from the reception of the original to the editorial production phase.",
            imgUrl: uned,
        },
        {
            title: "Arabic & Hebrew Studies",
            subtitle: "Universitat Barcelona UB, 2016-2020",
            description: "Proficient in Arabic and Hebrew languages, adept at analyzing literary texts. Knowledgeable about Arab, Islamic, and Jewish cultures, institutions, and historical events.",
            imgUrl: ub
        },
    ];

    return (
        <section className="background" id="background">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <div className="background-bx wow zoomIn">
                                        <h2>Background</h2>
                                        <p>In addition to my career and studies in the IT sector, I bring a rich cultural background derived from previous studies and experiences that have brought me to where I am today, fostering both professional and personal growth.</p>
                                        <Tab.Container id="backgrounds-tabs" defaultActiveKey="first">
                                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                                <Nav.Item>
                                                    <Nav.Link eventKey="first">Experience</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="second">Education</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="third">Hobbies</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                            <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                                <Tab.Pane eventKey="first">
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
                                                <Tab.Pane eventKey="second">
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
                                                <Tab.Pane eventKey="third">
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
                                            </Tab.Content>
                                        </Tab.Container>
                                    </div>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}

export default Background