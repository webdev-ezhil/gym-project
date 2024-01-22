import React from 'react';
import { Card } from 'react-bootstrap';

const Workout = () => {
  const cardData = [
    {
      imgSrc: 'push-up.gif',
      title: 'PUSH-UP',
      description: 'These need to be performed in proper form to avoid strain or injury. Individuals who have reached intermediate and advanced levels might set more ambitious goals. The range can vary between 50 and 100 pushups per day, split into multiple sets',

    },
    {
      imgSrc: 'FOURARMS.GIF',
      title: 'FORARMS',
      description:' then youre going to lift as heavy. as you can for the last two exercises. for total of 30 seconds per set because they are gripped focused movements the first exercise is a seated barbell wrist',
    },
    {
      imgSrc: 'WAIST.GIF',
      title: 'WAIST',
      description: 'Lie on your back, your feet flat on the ground, and your arms by your sides. Crunch up by raising your chest towards the ceiling. Engage your abs. From here, reach—slide—for your right heel with your right hand.',
    },
    {
      imgSrc: 'HIPS.GIF',
      title: 'HIPS',
      description: 'You can also place one weight on each hip. Perform a hip thrust by squeezing the glutes and pressing the dumbbell straight up until the hips align with the shoulders and knees.',
    },
  ];

  return (
    <div>
      {cardData.map((card, index) => (
        <div key={index} className='d-flex justify-content-center bg-dark p-5'>
          <Card className="mb-3" style={{ maxWidth: '540px' }}>
            <div className="row g-0">
              <div className="col-md-4">
                <Card.Img src={card.imgSrc} className="img-fluid rounded-start" alt={card.title} />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <Card.Title className="fw-bold">{card.title}</Card.Title>
                  <Card.Text>{card.description}</Card.Text>
                </div>
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Workout;