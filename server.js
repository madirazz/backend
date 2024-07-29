import express from "express";

const app = express();
const port = 3000;

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
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
