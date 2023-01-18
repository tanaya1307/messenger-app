import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useRef } from 'react'
import { useContacts } from '../contexts/ContactsProvider'
export default function NewContactModal({closeModal}) {
    function handleSubmit(e)
    {



        e.preventDefault()
       
       createContact(idRef.current.value,nameRef.current.value)
        closeModal()


    }
    const {createContact}=useContacts()
     const idRef= useRef()
     const nameRef= useRef()
    return (
   


    <>
       <Modal.Header closeButton>Create Contact</Modal.Header>
        <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>
                  Id
                </Form.Label>
                <Form.Control type="text" ref={idRef} required />
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" ref={nameRef} required />
                </Form.Group>   
                <Button type="Submit">Create</Button>
            </Form>
        </Modal.Body>

    </>
  )
}
