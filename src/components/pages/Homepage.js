import React from 'react';
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';


const Homepage = () => {
  return (
    <div className='p-0' >
    <Container fluid>
      <Row>
      <div className='p-0'>
      <Carousel>
       <Carousel.Item>
         <img className="d-block w-100 img-fluid" alt="Carousel Image 1" src="body.jpg" />
       </Carousel.Item>
     </Carousel>
    </div>
      </Row>
   
   
<Row>
      <div className='p-5 bg-dark'>
        <Row className="justify-content-center">
          <Col xs={12} sm={6} md={4}>
            <Card style={{ width: '100%', maxWidth: '18rem', background: '#343a40', color: '#fff' }}>
              <Card.Img variant="top" src="card2.jpg" />
              <Card.Body>
                <Card.Title className="fw-bold">DAILY WORKOUT</Card.Title>
                <Card.Text>
                  Yes, you can gain weight without the gym but not without exercise. You need to make sure your calorie intake is right and you also do some weight gain exercise at home. This will be enough for you to gain weight along with changing your everyday habits.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Card style={{ width: '100%', maxWidth: '18rem', background: '#343a40', color: '#fff' }}>
              <Card.Img variant="top" src="card3.jpg" />
              <Card.Body>
                <Card.Title className="fw-bold">DAILY WORKOUT</Card.Title>
                <Card.Text>
                  To my knowledge,red meats food items like red meats, chicken, fish, beans, whole milk, eggs, cheese, full-fat yoghurt, nuts, butter, and olives may help in gaining weight while maintaining your health. You may try these options in your meals in different.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Card style={{ width: '100%', maxWidth: '18rem', background: '#343a40', color: '#fff' }}>
              <Card.Img variant="top" src="card4.jpg" />
              <Card.Body>
                <Card.Title className="fw-bold">DAILY WORKOUT</Card.Title>
                <Card.Text>
                  Your health. The range can vary between 50 and 100 pushups per day, split into multiple sets. You may distribute the sets across the day to avoid fatigue and enhance recovery. Keep in mind that prioritizing quality over quantity is crucial combinations.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      </Row>

      <Row>
      <div className='d-flex justify-content-center bg-dark p-5'>
        <Card className="mb-3" style={{ maxWidth: '540px', background: '#343a40', color: '#fff' }}>
          <div className="row g-0">
            <div className="col-md-4">
              <Card.Img src="slimimg.jpg" className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <Card.Title className="fw-bold">WORKOUT PERIODS</Card.Title>
                <Card.Text>
                  With the right exercises and diet, three months can be enough time to get ripped at home. Focus on bodyweight training exercises that strengthen and tone muscles. Incorporate this workout routine at home, training for at least three days a week, and ideally, an hour a day.
                </Card.Text>
              </div>
            </div>
          </div>
        </Card>
      </div>
      </Row>
    </Container>
    </div>
  );
};

export default Homepage;







