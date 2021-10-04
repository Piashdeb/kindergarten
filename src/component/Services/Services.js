import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        const url = './Service2.json'
        fetch(url)
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className="py-4">
            <h1 className='py-4'>Our Services</h1>
            <Row xs={1} md={3} className="g-4">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </Row>

        </div>
    );
};

export default Services;