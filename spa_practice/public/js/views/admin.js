const Admin = () => {
  const container = document.createElement('div');
  container.classList.add('section');

  container.innerHTML = `
    <div class="container">
      <h1 class="title">Panel de Administración</h1>

      <div class="box">
        <h2 class="subtitle">Agregar nuevo evento</h2>
        <form id="event-form">
          <div class="field">
            <label class="label">Título</label>
            <div class="control">
              <input class="input" type="text" id="event-title" placeholder="Título del evento" required>
            </div>
          </div>

          <div class="field">
            <label class="label">Descripción</label>
            <div class="control">
              <textarea class="textarea" id="event-description" placeholder="Descripción del evento" required></textarea>
            </div>
          </div>

          <div class="control">
            <button class="button is-primary" type="submit">Agregar Evento</button>
          </div>
        </form>
      </div>

      <div class="box">
        <h2 class="subtitle">Lista de eventos</h2>
        <table class="table is-fullwidth is-striped" id="events-table">
          <thead>
            <tr>
              <th>Título</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  `;

  const form = container.querySelector('#event-form');
  const tableBody = container.querySelector('#events-table tbody');

  const loadEvents = () => {
    const events = JSON.parse(localStorage.getItem('events')) || [];
    tableBody.innerHTML = events.map(event => `
      <tr>
        <td>${event.title}</td>
        <td>${event.description}</td>
      </tr>
    `).join('');
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = container.querySelector('#event-title').value.trim();
    const description = container.querySelector('#event-description').value.trim();

    if (!title || !description) return;

    const events = JSON.parse(localStorage.getItem('events')) || [];
    events.push({ title, description });
    localStorage.setItem('events', JSON.stringify(events));

    form.reset();
    loadEvents();
  });

  loadEvents();
  return container;
};

export default Admin;