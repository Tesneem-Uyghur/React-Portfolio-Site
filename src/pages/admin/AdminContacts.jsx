import { useEffect, useState } from "react";
import { getContacts, deleteContact } from "../../api/contactService";
import { isAuthenticated } from "../../auth/auth-helper";
import "./AdminContacts.css";

export default function AdminContacts() {
  const auth = isAuthenticated();
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = () => {
    getContacts().then((data) => setContacts(data));
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete this contact?")) {
      deleteContact(id).then(() => loadContacts());
    }
  };

  if (!auth || auth.user.role !== "Admin") {
    return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Access Denied — Admin Only</h2>;
  }

  return (
    <div className="admin-contacts-page">
      <h1>Contact Messages</h1>

      {contacts.length === 0 && <p className="no-contacts">No contact messages yet.</p>}

      <div className="contacts-table">
        {contacts.map((c) => (
          <div key={c._id} className="contact-row">
            <div className="contact-info">
              <div className="info-row">
                <strong>Name:</strong> {c.firstName} {c.lastName}
              </div>
              <div className="info-row">
                <strong>Email:</strong> {c.email}
              </div>
              {c.phone && (
                <div className="info-row">
                  <strong>Phone:</strong> {c.phone}
                </div>
              )}
              {c.subject && (
                <div className="info-row">
                  <strong>Subject:</strong> {c.subject}
                </div>
              )}
              <div className="info-row message-row">
                <strong>Message:</strong> 
                <p>{c.message}</p>
              </div>
            </div>
            
            <button 
              className="delete-btn"
              onClick={() => handleDelete(c._id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}