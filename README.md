
# SPA Practice App

Aplicación web de práctica con autenticación de usuarios, roles (admin/user), y manejo de eventos conectados a una base de datos simulada con JSON Server. La vista del admin permite crear y eliminar eventos, mientras que cualquier usuario puede visualizar los eventos creados.

---

## Tech:

- HTML5, CSS3, JavaScript (ES Modules)
- Bulma CSS Framework
- JSON Server (Fake REST API)
- LocalStorage para sesión de usuario
- Modularización de vistas (SPA parcial con enrutador hash)
- Fetch API

---

## Installment / How to use / Deployment

1. **Clona o descarga este repositorio.**
2. **Instala JSON Server (si no lo tienes):**

   ```bash
   npm install -g json-server
   ```

3. **Ubícate en la carpeta raíz del proyecto y ejecuta:**

   ```bash
   json-server --watch db.json --port 3000
   ```

4. **Abre `index.html` en tu navegador** para iniciar la aplicación.

---

## Colaborators

- Juan David Olaya Restrepo
- Proyecto individual de práctica educativa.

---

## Maquetación

- Framework CSS: [Bulma](https://bulma.io/)
- Diseño responsive con sistema de columnas de Bulma.
- Secciones diferenciadas por vistas (`home`, `login`, `register`, `profile`, `products`, `admin`).
- Navegación SPA simulada mediante rutas hash (`#home`, `#login`, etc.).

---

## Estructura de Archivos

```
📦public/
 ┣ 📂js/
 ┃ ┣ 📂api/
 ┃ ┃ ┗ 📜api.js         # Conexión a JSON Server (GET, POST, DELETE)
 ┃ ┣ 📂views/
 ┃ ┃ ┣ 📜admin.js       # Vista del panel admin (crear/eliminar eventos)
 ┃ ┃ ┣ 📜products.js    # Vista de eventos públicos
 ┃ ┗ 📜main.js          # Enrutador SPA
 ┣ 📜index.html
 ┣ 📜admin.html
 ┗ 📜db.json            # Base de datos JSON Server (persistencia de eventos)
```