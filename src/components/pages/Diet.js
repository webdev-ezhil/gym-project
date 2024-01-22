import React from 'react';
import { Card } from 'react-bootstrap';

const Diet = () => {
  const cardData = [
    {
      imgSrc: 'BAN1.webp',
      title: 'BANANA',
      description: 'Bananas contain the right amount of carbohydrates and calories. Therefore, incorporating bananas into your diet depends on your goals. You can eat up to one banana a day as part of a healthy diet for weight loss. But eating 2 to 3 bananas will add up to 350 extra calories that can help you with weight gain.',
    },
    {
      imgSrc: 'EGG.img.jpg',
      title: 'EGG',
      description: 'If you want to gain your weight eat at least 4 eggs per day. Once you feel like 4 eggs are not enough, you can make it 5 or 6; it\'s up to you. I would also suggest you drink Banana shake with yoghurt because it is very healthy and you can also gain weight with this.',
    },
    {
      imgSrc: 'CHI.img.jpg',
      title: 'CHICKEN',
      description: 'The average person can eat 200 g of chicken a day and be fine. It is recommended that a person eat 0.75 g protein/kg. That means a 75 kg adult should have about 63 g of protein a day.',
    },
    {
      imgSrc: 'NETS.img.jpg',
      title: 'NETS',
      description: 'This all comes back to myth number one. Just remember nuts are not associated with weight gain, so there\'s no need to count how many you snack on, especially as the vast majority of us don\'t eat enough. If you\'re wondering what a recommended daily serve of nuts looks like, it\'s 30 grams or around a handful.',
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

export default Diet;



