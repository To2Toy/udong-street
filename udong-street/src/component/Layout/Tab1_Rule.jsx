import time from "../asset/time.png";
import person from "../asset/person.png";
import notice from "../asset/notice.png";
import eatable from "../asset/eatable.png";
import Recommendations from "./atom/Recommendations";
import {
  Card,
  Row,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Image,
} from "react-bootstrap";

import React, { useState } from "react";
const mockOrg = ["ALL", "식당 · 카페", "경조사", "체육시설", "학습시설"];
// 임시데이터 선언

const mock = [
  {
    organization: "식당 · 카페",
    detail: [
      {
        name: "식당 · 카페",
        people: 299,
        start: "0600",
        end: "2300",
        eatable: true,
        // caution: "~~~주의히세요",
      },
    ],
  },
  {
    organization: "경조사",
    detail: [
      {
        name: "결혼식",
        people: 299,
        start: "0000",
        end: "0000",
        eatable: true,
        caution: "~~~주의히세요",
      },
      {
        name: "돌잔치 · 장례식",
        people: 299,
        start: "0000",
        end: "0000",
        eatable: true,
        caution: "~~~주의히세요",
      },
    ],
  },
  {
    organization: "체육시설",
    detail: [
      {
        name: "실내 체육시설",
        people: 6,
        start: "0600",
        end: "2300",
        eatable: true,
        // caution: "~~~주의히세요",
      },
      {
        name: "실외 체육시설",
        people: 6,
        start: "0600",
        end: "2300",
        eatable: true,
        caution: "~~~주의히세요",
      },
    ],
  },
  {
    organization: "학습시설",
    detail: [
      {
        name: "도서관",
        people: 6,
        start: "0000",
        end: "0000",
        eatable: false,
        caution: "~~~주의히세요",
      },
      {
        name: "독서실 · 스터디카페",
        people: 6,
        start: "0000",
        end: "0000",
        eatable: false,
        caution: "~~~주의히세요",
      },
    ],
  },
];

const OrgList = (props) => {
  if (props.category === -1) {
    return mock.map((obj, idx) => (
      <div>
        <CardList key={idx} place={obj.detail}></CardList>
      </div>
    ));
  }
  return (
    <div>
      <CardList
        key={props.category}
        place={mock[props.category].detail}
      ></CardList>
    </div>
  );
};
const CardList = (props) => {
  const placeList = props.place.map((obj, idx) => (
    <Col key={idx} md="12">
      <RuleCard obj={obj} />
    </Col>
  ));
  return <Row>{placeList}</Row>;
};

const RuleCard = (props) => {
  const cardStyle = {
    // boxShadow: "0px 0px 5px #000",
    borderRadius: "10px",
    margin: "5px",
    padding: "10px",
  };
  return (
    <Card style={cardStyle}>
      <Card.Body>
        <Card.Title id="cardTitle">{props.obj.name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>
          <Image src={time} id="cardIcon" />
          운영 시간 :{" "}
          {props.obj.start === props.obj.end
            ? `제한 없음`
            : `${props.obj.start} ~ ${props.obj.end}`}
        </ListGroupItem>
        <ListGroupItem>
          <Image src={person} id="cardIcon" />
          {props.obj.people}명 까지
        </ListGroupItem>
        <ListGroupItem>
          <Image src={eatable} id="cardIcon" />
          취식 {props.obj.eatable ? `가능` : `불가`}
        </ListGroupItem>
        {props.obj.caution != null ? (
          <ListGroupItem>
            <Image src={notice} id="cardIcon" />
            {props.obj.caution}
          </ListGroupItem>
        ) : null}
      </ListGroup>
    </Card>
  );
};
const Category = (props) => {
  const result = [];
  for (let i = 0; i < mockOrg.length; i++) {
    result.push(
      <button
        onClick={() => {
          props.setCategory(i - 1);
        }}
      >
        {mockOrg[i]}
      </button>
    );
  }
  return result;
};
const Tab1_Rule = () => {
  const [category, setCategory] = useState(-1);
  return (
    <Container fluid>
      <Container>
        <Recommendations></Recommendations>
      </Container>
      <Category setCategory={setCategory}></Category>
      <Container>
        <OrgList category={category}></OrgList>
      </Container>
    </Container>
  );
};
export default Tab1_Rule;
