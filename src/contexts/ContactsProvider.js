 import React ,{createContext, useContext} from 'react'
 import useLocalStorage from '../hooks/useLocalStorage.js'

 const ContactsContext=createContext()
 export function useContacts()
 {
  return useContext(ContactsContext)
 }
 export default function ContactsProvider({children}) {
   const [contacts,setContacts]=useLocalStorage('contacts',[])
   function createContact(id,name)
   {
    setContacts(prevContacts=>{
      return [...prevContacts,{id,name}]
    })
   }
   return (
     
     <ContactsContext.Provider value={{contacts,createContact}}>
      {children}
     </ContactsContext.Provider>
   )
 }
 