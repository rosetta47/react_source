import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import pic from '../pic5.png';

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pic} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="outline-primary">Go somewhere</Button>
      </Card.Body>

      <hr/>
      <Card.Img variant="top" src={pic} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="outline-primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    
  );
}

export default BasicExample;