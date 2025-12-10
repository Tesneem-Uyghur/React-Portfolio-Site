const BASE_URL = "http://localhost:3000/api/project";


export function getAllProjects() {
  return fetch(BASE_URL).then(res => res.json());
}

export function getProjectById(id) {
  return fetch(`${BASE_URL}/${id}`)
    .then(res => res.json());
}

export function addProject(data) {
  return fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  }).then(res => res.json());
}

export function updateProject(id, data) {
  return fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  }).then(res => res.json());
}

export function deleteProject(id) {
  return fetch(`${BASE_URL}/${id}`, { 
    method: "DELETE" 
  }).then(res => res.json());
}