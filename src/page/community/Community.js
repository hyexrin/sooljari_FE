import React, {useEffect, useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CommunityCard from '../../component/CommunityCard'
import { communitydata } from '../../data/community-data.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'


const Community = ({community}) => {

  const navigate = useNavigate();
  const CreateCard = () => {
    navigate('/commuInsert');
  }
  return (
    <Container className='Community-box'>

      <Row>
        <Col><FontAwesomeIcon icon={faPlus} onClick={CreateCard}/></Col>
      </Row>

      <Row>
        {community && community.map((data) => (
          <Col key={data.id} lg={4} md={6} xs={12}><CommunityCard data={data}/></Col>
        ))}
      </Row>
    </Container>
  )
}

export default Community