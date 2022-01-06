import {Modal, Button,Form } from 'react-bootstrap';
import {useState} from 'react';
export default function Add({addHandler}) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const [title, settitle]= useState("")
    const [description, setdescription]= useState("")
    const [rating, setrating]= useState("")
    const [imgURL, setimgURL]= useState("")

    const addMovie=()=>{
     const newMovie={ id : Math.random, title, description, rating, imgURL }
     addHandler(newMovie)
     handleClose()
    }
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
         Add a new movie
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add a new movie</Modal.Title>
          </Modal.Header>
          <Modal.Body><Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Movie name</Form.Label>
    <Form.Control type="text" placeholder="Enter movie name"  onChange ={(e)=> settitle(e.target.value)} value={title}/>
    <Form.Label>Movie description </Form.Label>
    <Form.Control type="text" placeholder="movie description" onChange ={(e)=> setdescription(e.target.value)} value={description}/>
    <Form.Label>Poster url </Form.Label>
    <Form.Control type="text" placeholder="Enter movie url" onChange ={(e)=> setimgURL(e.target.value)} value={imgURL} />
    <Form.Label>Movie rate</Form.Label>
    <Form.Control type="text" placeholder="Enter movie rate" onChange ={(e)=> setrating(e.target.value)} value={rating} />
    
  </Form.Group> </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={addMovie}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  