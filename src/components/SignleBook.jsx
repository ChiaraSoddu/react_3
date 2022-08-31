
import {Card, Row, Col} from 'react-bootstrap';
import horror from '../data/horror.json'

function SingleBook() {
  return (
    <div>
        <Row justify-content-between>
            
        {
            horror.map((libro) => {
                return(<Col xs={3} justify-content-center>
                <Card style={{ width: '60%' }} xs={3}>
                <Card.Img variant="top" src={libro.img} />
                <Card.Body>
                    <Card.Title style={{ fontSize: '10px' }}>{libro.title}</Card.Title>
                </Card.Body>
                </Card>
                </Col>)
            })
        }
            
        </Row>
    </div>
  );
}

export default SingleBook;