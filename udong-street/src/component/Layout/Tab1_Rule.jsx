import {
  Card,
  Row,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";

const mockOrg = ["식당 * 카페", "경조사", "체육시설"];

const mock = [
  {
    organization: "식당 * 카페",
    detail: [
      {
        name: "식당 * 카페",
        people: 299,
        start: "0600",
        end: "2300",
        eatable: true,
        caution: "~~~주의히세요",
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
        name: "돌잔치 * 장례식",
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
        caution: "~~~주의히세요",
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
        name: "독서실 * 스터디카페",
        people: 6,
        start: "0000",
        end: "0000",
        eatable: false,
        caution: "~~~주의히세요",
      },
    ],
  },
];
const mock2 = [
  [
    {
      name: "식당 * 카페",
      people: 299,
      start: "0600",
      end: "2300",
      eatable: true,
      caution: "~~~주의히세요",
    },
  ],
  [
    {
      name: "결혼식",
      people: 299,
      start: "0000",
      end: "0000",
      eatable: true,
      caution: "~~~주의히세요",
    },
    {
      name: "돌잔치 * 장례식",
      people: 299,
      start: "0000",
      end: "0000",
      eatable: true,
      caution: "~~~주의히세요",
    },
  ],
  [
    {
      name: "실내 체육시설",
      people: 6,
      start: "0600",
      end: "2300",
      eatable: true,
      caution: "~~~주의히세요",
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
  [
    {
      name: "도서관",
      people: 6,
      start: "0000",
      end: "0000",
      eatable: false,
      caution: "~~~주의히세요",
    },
    {
      name: "독서실 * 스터디카페",
      people: 6,
      start: "0000",
      end: "0000",
      eatable: false,
      caution: "~~~주의히세요",
    },
  ],
];
const OrgList = (props) => {
  const placeList = mock.map((obj, idx) => (
    <div>
      <h1>{obj.organization}</h1>
      <CardList key={idx} place={obj.detail}></CardList>
    </div>
  ));
  return <div>{placeList}</div>;
};
const CardList = (props) => {
  // console.log("CardList",props)
  const nameList = props.place.map((obj, idx) => (
    <Col key={idx} md="6">
      {obj.organization}
      <RuleCard obj={obj} />
    </Col>
  ));
  return <Row>{nameList}</Row>;
};

const RuleCard = (props) => {
  console.log(props);
  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.obj.name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>
          운영 시간 :{" "}
          {props.obj.start == props.obj.end
            ? `제한 없음`
            : `${props.obj.start} ~ ${props.obj.end}`}
        </ListGroupItem>
        <ListGroupItem>{props.obj.people}명 까지</ListGroupItem>
        <ListGroupItem>
          취식 {props.obj.eatable ? `가능` : `불가`}
        </ListGroupItem>
      </ListGroup>
    </Card>
  );
};

const Tab1_Rule = () => {
  return (
    <Container fluid>
      우리 동네 규칙을 알아봅시다!
      <Container>
        <OrgList></OrgList>
      </Container>
    </Container>
  );
};
export default Tab1_Rule;
