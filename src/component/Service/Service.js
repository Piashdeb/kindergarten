import Button from '@restart/ui/esm/Button';
import { Card, Col } from 'react-bootstrap';
import './Service.css'

const Service = (props) => {
    console.log(props.service);
    const { name, img, price } = props.service;

    return (
        <div>
            <Col className="card">
                <Card className="mx-auto " border="info" style={{ width: '24rem' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            Price:{price}
                        </Card.Text>
                        <Button className="btn-primary btn "> Explore </Button>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    );
};

export default Service;