 import React, { useState } from 'react'
 import {Tab, Nav,Button,Modal} from 'react-bootstrap'
 import Conversations from './Conversations'
 import Contacts from './Contacts'
 import NewContactModal from './NewContactModal'
 import NewConversationsModal from './NewConversationsModal'
 export default function Sidebar({id}) {
     const [activeKey,setActiveKey]=useState('conversations')
     const conversationsOpen= activeKey ==='conversations'
    const [modalOpen,setModalOpen]=useState(false)
     function closeModal()
     {
        setModalOpen(false)
     }


   return (
     <div className='d-flex flex-column' style={{width:'250px'}}   >
       <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
         <Nav variant="tabs"  className="justify-content-center">
            <Nav.Item>
            <Nav.Link eventKey="conversations">
                Conversations
            </Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link eventKey="contacts">
                Contacts
            </Nav.Link>
            </Nav.Item>
           
         </Nav>
         <Tab.Content className="border-right overflow-auto flex-grow-1">
            <Tab.Pane eventKey={'conversations'}>
                <Conversations/>
            </Tab.Pane>
            <Tab.Pane eventKey={'contacts'}>
                <Contacts/>
            </Tab.Pane>
         </Tab.Content>
         <div className='p-2 border-top border-right small'>
            Your Id:<span className='text-muted'>{id}</span> 
         </div>
         <Button onClick={()=>{setModalOpen(true)
        }}style={{margin:'5px',background:'#7c73e6',border:'none'}}>
          New {conversationsOpen ? 'Conversations': 'Contact'}  
         </Button>
       </Tab.Container>
       <Modal show={modalOpen} onHide={closeModal}>
        {conversationsOpen ? <NewConversationsModal closeModal={closeModal}/>:<NewContactModal closeModal={closeModal}/>}
       </Modal>

     </div>
   )
 }
 