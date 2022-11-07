import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { botNav } from '../data/data';
import GoToCard from './GoToCard';

const BottomNavbar = () => {

    return (
        <div className='bottom-nav'>
            
            <Row>
                {botNav.map((icon)=> (
                    <Col key={icon.id}><GoToCard icon={icon} /></Col>
                ))}
            </Row>
        </div>
    )
}

export default BottomNavbar