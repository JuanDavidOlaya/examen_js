const Home = () => {
const session = JSON.parse(localStorage.getItem('session'));

return `
    <section class="section">
    <div class="container has-text-centered">
        <h1 class="title has-text-success">Welcome${session ? `, ${session.username}` : ''}!</h1>
        <article class="message is-dark">
  <div class="message-header">
    <p>:)</p>
  </div>
  <div class="message-body">
    Hola como estas ${session ? `, ${session.username}` : ''} como te encuentras hoy? <br>
    Bienvenido al organizador de eventos en esta puedes gestionar una serie de eventos basados en la disponibilidad de lugares y asistentes.
  </div>
</article>

        <div class="buttons is-centered mt-5">
        <a class="button is-success is-light" href="#products"><span class="tag is-success is-medium">Browse Products</span></a>
        ${session?.role === 'admin' ? `<a class="button is-warning" href="./eventos.html">Admin Panel</a>` : ''}
        </div>
    </div>
    </section>
`;
};

export default Home;
