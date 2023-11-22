
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";


const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} sm={6}>
                        {/* <img src={logo} alt="Logo" /> */}
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/mherrevi/"><img src={navIcon1} alt="Icon" /></a>
                            <a href="https://github.com/miguelherreravillanueva"><img src={navIcon2} alt="Icon" /></a>
                            <a href="https://www.instagram.com/miki.hv/"><img src={navIcon3} alt="Icon" /></a>
                            <a href="https://drive.google.com/file/d/1stdGsutym2X4rqni-toc5Pu3qYeHEUxV/view" download="CV_MiguelHerrera" ><img src={navIcon4} alt="" /></a>
                        </div>
                        <p>Copyright 2023. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer