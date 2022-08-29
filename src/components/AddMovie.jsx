import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const AddMovie = () => {
  return (
    <div className='container mt-4'>
        <h1>Rate Your Favorite Movie</h1>
        <hr  className='hr'/>
        <p>Fill out the below form and rate your experience</p>
        <div className="className">
        <Form className="mt-2">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Your Name</Form.Label>
        <Form.Control type="email"  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter Movie Name</Form.Label>
        <Form.Control type="password"  />
      </Form.Group>
      <Form.Label>Movie Rating</Form.Label>
      <Form.Select aria-label="Default select example">
      <option>Select Rate</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </Form.Select>
        <br />
      <Button variant="primary" type="submit">
        Add Movie!
      </Button>
    </Form>
        </div>
    </div>
  )
}

export default AddMovie