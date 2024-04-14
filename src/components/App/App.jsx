import { useState, useEffect } from "react";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";
import "../../index.css";


export default function App() {
  const initialContacts = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];
   const [contacts, setContacts] = useState(() => {

        const savedContacts = localStorage.getItem('contacts');

        if (savedContacts !== null) {
            return JSON.parse(savedContacts);
        }
     return initialContacts;
    });

    useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);
  
  const [filter, setFilter] = useState("");
  
  const handleFilterChange = (filterValue) => {
    setFilter(filterValue);
  };

  const handlerSumbit = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDeleteContact = id => {
        setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
    };

  return (
    <div>
      <ContactForm onAdd={handlerSumbit}/>
      <h1>Phonebook</h1>
      <SearchBox onFilterChange={handleFilterChange} />
      <ContactList data={filteredContacts} onDeleteContact={handleDeleteContact}/>
    </div>
  );
}


