import React, { useEffect, useState } from 'react';
import { Carousel, Row } from 'react-bootstrap';
import Homecard from '../Homecard/Homecard';

const Home = () => {
    const [Services, setServices] = useState([]);
    useEffect(() => {
        const url = './Service1.json';
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div>
                <Carousel className="w-100 mx-auto">
                    <Carousel.Item>
                        <img
                            className="d-block img-fluid w-100"
                            src="./1.jpg"
                            alt="First slide"
                        />
                       
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block img-fluid w-100"
                            src="./2.jpg"
                            alt="Second slide"
                        /> 
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block img-fluid w-100"
                            src="./3.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
                <h1 className="text-danger py-5">Our Services..</h1>
                <Row xs={1} md={2} className="g-1">
                    {
                        Services.map(service => <Homecard key={service.id} service={service}></Homecard>)
                    }
                </Row>

            </div>
        </div>
    );
};

export default Home;