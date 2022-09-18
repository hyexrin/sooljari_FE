import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CommunityCard from '../../component/CommunityCard'
import { communitydata } from '../../data/community-data.js'

const Community = () => {
  return (
    <Container className='Community-box'>
      <Row>
        {communitydata.map((data) => (
          <Col lg={4} md={6} xs={12}><CommunityCard data={data}/></Col>
        ))}
        {/* <Col lg={4} md={6} xs={12}><CommunityCard /></Col>
        <Col lg={4} md={6} xs={12}><CommunityCard /></Col>
        <Col lg={4} md={6} xs={12}><CommunityCard /></Col>
        <Col lg={4} md={6} xs={12}><CommunityCard /></Col>
        <Col lg={4} md={6} xs={12}><CommunityCard /></Col>
        <Col lg={4} md={6} xs={12}><CommunityCard /></Col> */}
      </Row>
    </Container>
  )
}

export default Community