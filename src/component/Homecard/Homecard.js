import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Homecard = (props) => {
    console.log(props.services);
    const { name, img, price } = props.service;

    return (
        <div className="py-4">
            <Col className="mx-auto ">
                <Card className="mx-auto " border="info" style={{ width: '24rem' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            Price:{price}
                        </Card.Text>
                        <button className="btn-primary btn ">Add</button>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    );
};

export default Homecard;