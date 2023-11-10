import { useEffect, useState } from 'react';
import { Nav, Container, Navbar } from "react-bootstrap";
import logo from '../assets/img/logo.svg'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
import navIcon4 from '../assets/img/nav-icon4.svg'

function NavBar() {

    const [activeLink, setActiveLink] = useState('home')
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onscroll)
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className='navbar-toggler-icon'></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    </Nav>
                    <span className='navbar-text'>
                        <div className='social-icon'>
                            <a href="https://www.linkedin.com/in/mherrevi/"><img src={navIcon1} alt="" /></a>
                            <a href="https://github.com/miguelherreravillanueva"><img src={navIcon2} alt="" /></a>
                            <a href="https://www.instagram.com/miki.hv/"><img src={navIcon3} alt="" /></a>
                            <a href="../assets/1.CV_Miguel_Herrera_Villanueva_(en).pdf" download="1.CV_Miguel_Herrera(en)"><img src={navIcon4} alt="" /></a>
                        </div>
                        <button className='vvd' onClick={() => console.log('connect')}>
                            <span>Let's connect</span>
                        </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;


