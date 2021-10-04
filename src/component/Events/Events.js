import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Event from '../Event/Event';

const Events = () => {
    const [events, setEvents] = useState([]);
    useEffect(()=>{
        const url = './Events.json';
        fetch(url)
        .then(res=> res.json())
        .then(data => setEvents(data))
    },[])
    return (
        <div>
            <h1>Events </h1>
            <Row xs={1} md={3} className="g-4">
                {
                    events.map(event => <Event key={event.id} event={event}></Event>)
                }
            </Row>
        </div>
    );
};

export default Events;