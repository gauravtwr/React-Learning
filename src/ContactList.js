import React from "react";
import ContactCard from "./ContactCard";
import loading from "./loading";

const ContactList = ({contacts,deleteContact}) => {
    let contactList = contacts.map((contact) =>
        <ContactCard
            contact={contact}
            key={contact.id}
            deleteContact={deleteContact}/>);
    return (
        <div>{contactList}</div>
    )
}
export default loading(ContactList)