import italiano from "../assets/img/italiano.png"
import español from "../assets/img/español.png"
import catalan from "../assets/img/catalan.png"
import ingles from "../assets/img/ingles.png"
import arabe from "../assets/img/arabe.png"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import colorSharp from "../assets/img/color-sharp.png"

const Languages = () => {
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
        <section className="language" id="languages">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="language-bx wow zoomIn">
                            <h2>Languages</h2>
                            <p>I speak these and learn more</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme language-slider">
                                <div className="item">
                                    <img src={español} alt="Image" />
                                    <h5>Spanish - Native</h5>
                                </div>
                                <div className="item">
                                    <img src={catalan} alt="Image" />
                                    <h5>Catalan - Native</h5>
                                </div>
                                <div className="item">
                                    <img src={ingles} alt="Image" />
                                    <h5>English - C1</h5>
                                </div>
                                <div className="item">
                                    <img src={arabe} alt="Image" />
                                    <h5>Arabic - B2</h5>
                                </div>
                                <div className="item">
                                    <img src={italiano} alt="Image" />
                                    <h5>Italian - B1</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
        </section>
    )
}

export default Languages