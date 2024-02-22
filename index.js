const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("ok now node ok ok");
});

const users = [
  { id: 1, name: "shabana", email: "shabana@gmail.com", number: "01303871769" },
  { id: 2, name: "shabnur", email: "shanur@gmail.com", number: "01303871769" },
  { id: 3, name: "shila", email: "shila@gmail.com", number: "01303871769" },
  { id: 4, name: "soniya", email: "soniya@gmail.com", number: "01303871769" },
  { id: 5, name: "sumona", email: "sumon@gmail.com", number: "01303871769" },
  { id: 6, name: "shokhi", email: "shokhi@gmail.com", number: "01303871769" },
];

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/user/:id", (req, res) => {
  console.log(req.params);
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);
  res.send(user);
});

app.post("/user", (req, res) => {
  console.log("request", req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
});

app.listen(port, () => {
  console.log("listening to port,", port);
});
