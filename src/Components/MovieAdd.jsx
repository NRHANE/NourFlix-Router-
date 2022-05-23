
import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';

function MovieAdd({movies, setMovies}) {
const [show, setShow] = useState(false);
const [newMovie, setNewMovie]= useState(
    {
    name:"",
    posterUrl:"",
    description:"",
    rating:"",
    }
)
const handleAdd=()=>{setMovies([...movies,newMovie]);handleClose()}
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

  return (
    <div>
       <>
      <Button variant="dark" style={{backgroundColor:"yellow", color:"black"}} onClick={handleShow}>
        AddMovie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Movie Name"  onChange={(e)=>setNewMovie({...newMovie,name:e.target.value})}/>
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Image Url</Form.Label>
    <Form.Control type="text" placeholder="Enter Movie image" onChange={(e)=>setNewMovie({...newMovie,posterUrl:e.target.value})}/>
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Description</Form.Label>
    <Form.Control type="text" placeholder="Enter Movie Description" onChange={(e)=>setNewMovie({...newMovie,description:e.target.value})} />
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Rating</Form.Label>
    <Form.Control type="text" placeholder="Enter Movie Rating"onChange={(e)=>setNewMovie({...newMovie,rate:e.target.value})} />
    
  </Form.Group>

  </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Add Movie 
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    </div>
  )
}

export default MovieAdd
