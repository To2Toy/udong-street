import disinfection from "../../asset/disinfection.png";
import handwash from "../../asset/handwash.png";
import mask from "../../asset/mask.png";
import udong from "../../asset/udong.png";
import "./Recommendations.css";
import { Container, Row, Col } from "react-bootstrap";

const Recommendations = (props) => {
  return (
    <Container id="recBody">
      <Row>
        {/* <Col xs={1}></Col> */}
        <Col xs={2}>
          <img src={disinfection} alt="" />
        </Col>
        <Col xs={2}>
          <img src={handwash} alt="" />
        </Col>
        <Col xs={2}>
          <img src={mask} alt="" />
        </Col>
        <Col xs={2}>
          <img src={udong} alt="" />
        </Col>

        <Col xs>
          <Row>
            <span id="message">함께 노력해요 !</span>
          </Row>
          <Row>
            <span id="message">우동 냠냠</span>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Recommendations;
