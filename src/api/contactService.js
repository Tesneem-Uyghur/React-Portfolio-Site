const BASE_URL = "http://localhost:3000/api/contacts";

//Get all contacts
function getContacts(){
    return fetch(BASE_URL)
    .then(response =>response.json())
    .catch(error =>console.error("Error fetching contacts:", error));    
}

//Add new contact
function addContact(contactInfo){
    return fetch(BASE_URL,{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(contactInfo),
    })
    .then(response => response.json())
    .catch(error => console.error("Error adding contact:", error));
}

//Delete a contact
function deleteContact(id){
    return fetch(`${BASE_URL}/${id}`,{
        method: "DELETE",
    })
    .then(response =>response.json())
    .catch(error => console.error("Error deleting contact:", error));  
}

//Export all functions 
export { getContacts, addContact, deleteContact };