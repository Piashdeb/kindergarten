import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Event = (props) => {
    const{name, descripiton, img } = props.event;
    return (
        <div>
            <Col className=" h-100">
                <Card className="mx-auto " border="info" style={{ width: '24rem' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            <p>{descripiton}</p>
                        </Card.Text>
                        <Button className="btn-primary btn ">Add</Button>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    );
};

export default Event;