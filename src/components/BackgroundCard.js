import { Col } from "react-bootstrap";

const BackgroundCard = ({ title, subtitle, description, imgUrl, url }) => {
    return (
        <Col size={12} sm={6} md={4}>
            <a href={url}>
                <div className="background-imgbx">
                    <img src={imgUrl} />
                    <div className="background-txtx">
                        <h4>{title}</h4>
                        <h6>{subtitle}</h6>
                        <span>{description}</span>
                    </div>
                </div>
            </a>
        </Col>
    )
}

export default BackgroundCard