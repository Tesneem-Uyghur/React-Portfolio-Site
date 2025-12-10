const BASE_URL = "http://localhost:3000/api/auth";
import { isAuthenticated } from "../auth/auth-helper"; 

// Helper function to get auth token
function getAuthToken() {
  const auth = isAuthenticated();
  return auth ? auth.token : null;
}

export function getAllProjects() {
  return fetch(BASE_URL).then(res => res.json());
}

export function getProjectById(id) {
  return fetch(`${BASE_URL}/${id}`)
    .then(res => res.json());
}

export function addProject(data) {
  const token = getAuthToken();
  
  return fetch(BASE_URL, {
    method: "POST",
    headers: { 
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify(data)
  }).then(res => res.json());
}

export function updateProject(id, data) {
  const token = getAuthToken();
  
  return fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { 
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify(data)
  }).then(res => res.json());
}

export function deleteProject(id) {
  const token = getAuthToken();
  
  return fetch(`${BASE_URL}/${id}`, { 
    method: "DELETE",
    headers: {
      "Authorization": `Bearer ${token}`
    }
  }).then(res => res.json());
}

// Signup function
function signup(user) {
    return fetch(`${BASE_URL}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .catch(error => console.error("Error during signup:", error));
}

// Signin function
function signin(credentials) {
    return fetch(`${BASE_URL}/signin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials)
    })
    .then(response => response.json())
    .catch(error => console.error("Error during signin:", error));
}


export const signout = async () => {
  try {
    let response = await fetch("http://localhost:3000/api/signout", {
      method: "GET",
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

// 
export { signup, signin};