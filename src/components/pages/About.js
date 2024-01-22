import React from 'react';
import { Card } from 'react-bootstrap';

const About = () => {
  return (
    <div className='d-flex justify-content-center bg-dark p-5'>
      <Card className="mb-3" style={{ maxWidth: '540px', background: '#343a40', color: '#fff' }}>
        <div className="row g-0">
          <div className="col-md-4">
            <Card.Img src="body1.jpg" className="img-fluid rounded-start" alt="About Us" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <Card.Title className="fw-bold">ABOUT US</Card.Title>
              <Card.Text>
                One way you can encourage your website visitors to trust you is through the About page. Consider it a virtual handshake, wherein you welcome your potential customers to your business and showcase the people behind the brand. With this, you're creating a sense of authenticity, transparency, and approachability.
              </Card.Text>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default About;




