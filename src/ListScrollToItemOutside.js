import React, { createRef } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bridgeTest from './bridgeTest.jpg';

// change style of the buttons

const list = [
  {
    id: 'Story',

  },
  {
    id: 'Mission',

  },
  {
    id: 'Event',

  },
  {
    id: 'Get Involved',

  },
];

const ListScrollToItem = () => {
  const refs = list.reduce((acc, value) => {
    acc[value.id] = createRef();
    return acc;
  }, {});

  // Scroll Into View API: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
  const handleClick = id =>
    refs[id].current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

  return (
    <div align = 'center'>
      <style type = "text/css">
        {`
          .btn-new {
            background-color: white;
            border: black;
            border-radius: 3px;
            color: black;
          }
          .btn-top {
            padding : 2rem 3rem;
            font-size: 50 rem;
          }
        `}
      </style>
      <ul>
        <ButtonGroup aria-label = "Group" align = "center">
            <Button 
              style={{fontSize: 30, fontWeight: 'bold', fontFamily: 'futura'}}
              variant = "outline-dark"
              size="top"
              onClick={() => handleClick('Story')}
            >
              {'Story'}
            </Button>
            <Button 
              style={{fontSize: 30, fontWeight: 'bold', fontFamily: 'futura'}}
              variant = "outline-dark"
              size = "top"
              
              //class="w3-button w3-black"
              //type="button"
              onClick={() => handleClick('Mission')}
            >
              {'Mission'}
            </Button>
            <Button 
              
              style={{fontSize: 30, fontWeight: 'bold', fontFamily: 'futura'}}
              variant = "outline-dark"
              size = "top"
              onClick={() => handleClick('Event')}
            >
              {'Event'}
            </Button>
            <Button 
              style={{fontSize: 30, fontWeight: 'bold', fontFamily: 'futura'}}
              variant = "outline-dark"
              size = "top"
              onClick={() => handleClick('Get Involved')}
            >
              {'Get Involved'}
            </Button>
        </ButtonGroup>
        {}
      </ul>

      <ul>
        <Container align="center" style={{fontSize: 30, fontWeight: 'bold', fontFamily: 'futura'}} fluid = "true" >
          <Row key = 'Story' ref={refs['Story']}>
            <Col fluid = "true" md="auto" lg = "5" >
              <Row className='Row-Header'>{'STORY: '}</Row>
              <Row align ="left" style={{fontSize: 12, fontWeight: 'normal', fontFamily: 'futura'}}>
                <Col lg = {{ span: 12, offset: 2 }} md={{ span: 13, offset: 2 }}>{
                  <p className = "Paragraph"> 
                  <br></br>
                  Penn has a thriving and intelligent Greek Life. However, there is limited interaction between
                  these large, philanthropic entities. As a result, the Penn Greek Relays present the opportunity for
                  cooperation amongst all Greek Organizations to raise significant amounts of money
                   for <a target="_blank" href= 'https://www.womenagainstabuse.org/'> 
                      Women Against Abuse
                  </a>, a Philadelphia grass roots non-profit aiming at protecting families from domestic abuse.
                  </p>
                }
                 </Col>
              </Row>
            </Col>
            <Col>
              {<img width = "300" alt="Test Pic" src= {bridgeTest}></img>}
            </Col>
          </Row>
          <Row key = 'Mission' ref={refs['Mission']}>
          <Col fluid = "true" md="auto" lg = "5" >
              <Row className='Row-Header'>{'Mission: '}</Row>
              <Row align ="left" style={{fontSize: 12, fontWeight: 'normal', fontFamily: 'futura'}}>
                <Col lg = "10" md={{ span: 3, offset: 2 }}>{
                  <p className = "Paragraph"> Penn has a thriving and intelligent Greek Life. However, there is limited interaction between
                  these large, philanthropic entities. As a result, the Penn Greek Relays present the opportunity for
                  cooperation amongst all Greek Organizations to raise significant amounts of money
                   for <a target="_blank" href= 'https://www.womenagainstabuse.org/'> 
                      Women Against Abuse
                  </a>, a Philadelphia grass roots non-profit aiming at protecting families from domestic abuse.
                  </p>
                }
                 </Col>
              </Row>
            </Col>
            <Col md="auto">{<img width = "300" alt="Test Pic" src= {bridgeTest}></img>}</Col>
            <Col md={{ span: 3, offset: 0 }}>
            </Col>
          </Row>
          <Row key = 'Event' ref={refs['Event']}>
            <Col className = "Row-Header" lg="auto">{`EVENT: `}</Col>
            <Col md={{ span: 6, offset: 3 }}>{`EVENT`}</Col>
          </Row>
          <Row key = 'Get Involved' ref={refs['Get Involved']}>
            <Col lg="auto" className='Row-Header'>{`GET INVOLVED: `}</Col>
            <Col md={{ span: 6, offset: 3 }}>{`GET INVOLVED`}</Col>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Submit your email here to get involved</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="Name" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
          </Form>
          </Row>
        </Container>
      </ul>
    </div>
  );
};

export default ListScrollToItem;