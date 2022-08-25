import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { botNav } from '../data/data';
import GoToCard from './GoToCard';

const BottomNavbar = () => {

    return (
        <Container className='bottom-nav'>
            
            <Row>
                {botNav.map((icon)=> (
                    <Col><GoToCard icon={icon} /></Col>
                ))}
            </Row>
        </Container>
    )
}

export default BottomNavbar