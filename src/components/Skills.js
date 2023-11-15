import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import javascript from "../assets/img/javascript.png"
import react from "../assets/img/react.png"
import html from "../assets/img/html.png"
import css from "../assets/img/css.png"
import sass from "../assets/img/sass.png"
import mongodb from "../assets/img/mongodb.png"
import git from "../assets/img/git.png"
import jenkins from "../assets/img/jenkins.png"
import mysql from "../assets/img/mysql.png"
import nodejs from "../assets/img/nodejs.png"
import sequelize from "../assets/img/sequelize.png"
import docker from "../assets/img/docker.png"
import colorSharp from "../assets/img/color-sharp.png"

const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>I actually work with...</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={html} alt="Image" />
                                    <h5>HTML5</h5>
                                </div>
                                <div className="item">
                                    <img src={css} alt="Image" />
                                    <h5>CSS3</h5>
                                </div>
                                <div className="item">
                                    <img src={sass} alt="Image" />
                                    <h5>SASS</h5>
                                </div>
                                <div className="item">
                                    <img src={javascript} alt="Image" />
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    <img src={react} alt="Image" />
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <img src={nodejs} alt="Image" />
                                    <h5>Node.js</h5>
                                </div>
                                <div className="item">
                                    <img src={mysql} alt="Image" />
                                    <h5>MySQL</h5>
                                </div>
                                <div className="item">
                                    <img src={sequelize} alt="Image" />
                                    <h5>Sequelize</h5>
                                </div>
                                <div className="item">
                                    <img src={mongodb} alt="Image" />
                                    <h5>MongoDB</h5>
                                </div>
                                <div className="item">
                                    <img src={jenkins} alt="Image" />
                                    <h5>Jenkins</h5>
                                </div>
                                <div className="item">
                                    <img src={docker} alt="Image" />
                                    <h5>Docker</h5>
                                </div>
                                <div className="item">
                                    <img src={git} alt="Image" />
                                    <h5>Git</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
    )


}

export default Skills;