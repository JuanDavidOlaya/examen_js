import { getEventos } from '../api/api.js';

const ViewName = async () => {
  const eventos = await getEventos();

  return `
    <section class="section">
      <div class="container">
        <h1 class="title has-text-light">Eventos Disponibles</h1>
        <table class="table is-fullwidth is-striped">
          <thead>
            <tr>
              <th>Título</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            ${eventos.map(e => `
              <tr>
                <td>${e.title}</td>
                <td>${e.description}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </section>
  `;
};

export default ViewName;