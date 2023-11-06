import { Col } from "react-bootstrap"

const EducationCard = ({ title, description, imgUrl, description2 }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <span>{description2}</span>
        </div>
      </div>
    </Col>
  )
}

export default EducationCard