const NotFound = () => {
  return `<div class="notification is-danger">
  <button class="delete"></button>
  Error 404: Page Not Found
  <p>The page you are looking for does not exist.</p>
  <p class="has-text-centered"></p>
    <a href="#home" class="has-text-success">Go to Home</a>
</div>`;
};

export default NotFound;
