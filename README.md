# SvelteKit CRUD Application

This is a CRUD (Create, Read, Update, Delete) application built with SvelteKit. It uses a PostgreSQL database to store user data.

## Project Structure

- `src/`: Contains the client-side and server-side code for the application.	
- `.vscode/`: Contains the debug settings for the application.
- `database/`: Contains the database schema and compose file for the PostgreSQL database.

---
- `src/routes/+layout.svelte`: Renders the pages (includes Tailwind CSS styles). 
- `src/routes/+page.server.ts`: The server-side logic for the login page 
- `src/routes/+page.svelte`: The login page

---

- `src/routes/api/users/[id]/+server.ts`: Used for getting, updating, and deleting a specific user.
- `src/routes/api/users/+server.ts`: Used for getting all users and creating a new user.
---

- `src/routes/overview/+page.server.ts`: The server-side logic for the overview page.
- `src/routes/overview/+page.svelte`: The client-side logic for the overview page.

---

- `src/routes/register/+page.server.ts`: The server-side logic for the registration page.
- `src/routes/register/+page.svelte`: The client-side logic for the registration page.


## Pages

- `/`: Login Page 
- `/register`:  Register Page
- `/overview`: User Overview Page 

## Endpoints

- `GET /api/users`: Fetches all users from the database.
- `POST /api/users`: Creates a new user. 
- `GET /api/users/:id`: Fetches a specific user by their ID.
- `PUT /api/users/:id`: Updates a specific user by their ID.
- `DELETE /api/users/:id`: Deletes a specific user by their ID.


## Running the Project

To run the database, use the following commands:

- `docker-compose up -d`: Starts the PostgreSQL database.
- `docker-compose down`: Stops the PostgreSQL database.

To run the project, use the following commands:

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run preview`: Serves the built application for previewing.
