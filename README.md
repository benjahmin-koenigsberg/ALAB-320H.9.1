
### React To Do App

This project serves as a starting point for a React application that incorporates essential React concepts and external tools to build a functional and visually appealing application.

### Requirements

Your todo list application must have:

A heading labeling it as a "todo list."
A list of "todo" items, which are strings listing activities to be accomplished (e.g. "find that missing sock"). Each "todo" item should have:

A checkbox next to it which indicates whether it is "complete."
A "delete" button next to it which removes it from the list.

The "delete" button should be disabled unless the todo is complete!
An "edit" button that replaces the todo string with a text input used to edit the todo.

Hint: bind the value of this text input to a piece of state so that it is always accurate, even when first displayed!
When this text input is active, the "delete" and "edit" buttons should be hidden, and a "save" button should appear. The "save" button should save any changes made to the todo within the text input.
An input element that creates new todo items and adds them to the list.
New todos should be added to the top of the list visually; the oldest todos should be at the bottom.

### Features

- Vite: Lightning-fast React setup with Vite for quick development and optimized builds.
- useReducer Hook: State management using the useReducer hook for a predictable state flow.
- Bootstrap: Stylish and responsive UI components powered by Bootstrap.
- Local Storage: Persistent data storage in the browser for maintaining state across sessions.
- JSONPlaceholder: Utilizes JSONPlaceholder, a fake online REST API, to simulate data fetching.

### Live site

https://to-do-app-henna-phi.vercel.app/

### Screen shots

![Alt text](<Screen Shot 2023-12-11 at 4.30.52 PM.png>)

![Alt text](<Screen Shot 2023-12-11 at 4.31.31 PM.png>)

### Run

Clone the repository: git clone https://github.com/benjahmin-koenigsberg/ALAB-320H.9.1
Navigate to the project directory: cd ALAB-320H.9.1
Install dependencies: npm install
Start the development server: npm run dev
Open your browser and visit http://localhost:3000

### Shout outs

- Per Scholas https://www.perscholas.org
- JSON place holder https://jsonplaceholder.typicode.com/
