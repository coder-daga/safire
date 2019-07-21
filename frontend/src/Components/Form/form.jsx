 import React from 'react'

    const Contacts = ({ contacts }) => {
        //alert(contacts);
      return (
        <div>
          <center><h1>Contact List</h1></center>
          {contacts.map((contact) => (
            <div className="card" key = {contact.id}>
              <div className="card-body">
                <h5 className="card-title">{contact.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{contact.email}</h6>
                <p className="card-text">{contact.company.catchPhrase}</p>

                {/* <h5 className="card-title">{contact.flag}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{contact.message}</h6>
                <p className="card-text">{contact.company.message}</p> */}
              </div>
            </div>
          ))}
        </div>
      )
    };

    export default Contacts;