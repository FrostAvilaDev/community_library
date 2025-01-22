import express from "express";
const app = express();
app.use(express.json());


// Method => GET, POST, PUT/PATCH, DELETE
// Name => / - sempre no   plural
// Callback functions => Onde EXECUTAMOS O BACKEND (LÓGICA, REGRA DE NEGÓCIO, ETC...)

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/users", (req, res) => {
  const users = [];
  const body = req.body;
  users += body;
  res.send(users);
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
