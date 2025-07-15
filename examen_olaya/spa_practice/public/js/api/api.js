const API_URL = 'http://localhost:3000/events';

export async function getEventos() {
  const res = await fetch(API_URL);
  return await res.json();
}

export async function addEvento(evento) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(evento)
  });
  return await res.json();
}

export async function deleteEvento(id) {
    // Use the API URL to delete the event by ID
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  });
  return res.ok;
}