import React from 'react'
import { Container, Row } from 'react-bootstrap'

export default function DiaryList({calendar}) {
  return (
    <Container className='diary-list-box'>

        {/* <img src='http://localhost:30/images/diary-icon.png' style={{width: '4rem'}}/> */}
        <Row>{calendar?.date}</Row>
        <Row>{calendar?.diary}</Row>
    </Container>
  )
}
