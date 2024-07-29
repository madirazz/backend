import express from "express";
import jwt from "jsonwebtoken";
import 'dotenv/config'

const app = express();
const port = 3000;

app.use(express.json());

const posts = [
  {
    username: "Razi",
    title: "My First Post",
    content: "This is my first blog post!",
  },
  {
    username: "John",
    title: "My Second Post",
    content: "This is my Second blog post!",
  },
];

app.get("/posts", (req, res) => {
  res.json(posts);
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const user = { name: username };

  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  res.json({ accessToken: accessToken });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
