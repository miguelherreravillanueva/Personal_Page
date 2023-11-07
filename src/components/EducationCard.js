import { Col } from "react-bootstrap"

const EducationCard = ({ title, subtitle, imgUrl, description, url }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a href={url}>
        <div className="proj-imgbx">
          <img src={imgUrl} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <h6>{subtitle}</h6>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  )
}

export default EducationCard