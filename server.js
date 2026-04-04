import express from 'express';

const app = express();
const port = 3000;

let todos = [
  { id: '1', text: 'Buy milk', isCompleted: true },
  { id: '2', text: 'Go to the gym', isCompleted: true },
  { id: '3', text: 'Learn React', isCompleted: false },
  { id: '4', text: 'Learn TypeScript', isCompleted: false },
];

// CORS — runs first; also supports direct calls from other dev ports (e.g. 5173)
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE, OPTIONS'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Max-Age', '86400');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(204);
  }
  next();
});

app.use(express.json());

app.get("/api/todos", (req, res) => {
 res.json(todos);
});

app.post("/api/todos", (req, res) => {
 const newTodo = {
  id: `${Date.now()}`,
  text: req.body.text,
  isCompleted: false,
 };
 todos.push(newTodo);
 res.json(newTodo);
});

app.delete("/api/todos/:id", (req, res) => {
 const todoId = req.params.id;
 todos = todos.filter((todo) => todo.id !== todoId);
 res.send();
});

function updateTodoById(req, res) {
 const todoId = req.params.id;
 const updatedTodo = req.body;

 const todoIndex = todos.findIndex((todo) => todo.id === todoId);

 if (todoIndex === -1) {
  return res.status(404).json({ message: "Todo not found" });
 }

 todos[todoIndex] = { ...todos[todoIndex], ...updatedTodo };
 res.json(todos[todoIndex]);
}

app.put("/api/todos/:id", updateTodoById);
app.patch("/api/todos/:id", updateTodoById);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});