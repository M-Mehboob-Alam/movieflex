import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'

const MovieList = () => {
  return (
    <div className='container mt-4'>
        <h1>Movie List</h1>
        <hr />
        <Row>
            <Col md={3}>
            <Form.Control
                type="text"
                placeholder="Search Movie.."
                aria-label="Disabled input example"
              
            />
            </Col>
            <Col md={{span: 3, offset:6}}>
            <Form.Select aria-label="Default select example">
                <option>Sort Movie By Rating</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                </Form.Select>
            </Col>
        </Row>
    </div>
  )
}

export default MovieList