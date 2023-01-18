import {React,useRef} from 'react'
import {Button, Container,Form } from 'react-bootstrap'
import {v4 as uuidv4} from 'uuid'

export default function Login({onIdSubmit
}) {
    const idRef=useRef()
    
    function handleSubmit(e)
    {
      e.preventDefault()
      onIdSubmit(idRef.current.value)

    }

    function createNewId()
    {
      let newid=uuidv4()
      onIdSubmit(newid)
      idRef.current.value=newid
      
    }


  return (
    <Container className="align-items-center d-flex" style={{height:'100vh'}}>
     < Form onSubmit={handleSubmit} className="w-100">
        <Form.Group>
            <Form.Label>Enter your Id</Form.Label>
            <Form.Control type="text" ref={idRef} required></Form.Control>
        </Form.Group>
        <Button type="submit" style={{background:'#7c73e6',border:'none',margin:'0.5rem'}}>Login</Button>
        <Button style={{background:' #c4c1e0',border:'none'}} onClick={createNewId}>Create New Id</Button>
        </Form>
     
        

       

    </Container>
  )
}
