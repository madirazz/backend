import express from "express";
import knex from "knex";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import knexConfig from "./knexfile.js";
import dotenv from "dotenv";
import cors from 'cors';

dotenv.config();

const app = express();
const db = knex(knexConfig);
const port = 3000;

app.use(express.json());
app.use(cors());

app.post("/register", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Please provide username and password" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = { username, password: hashedPassword };

    await db("users").insert(user);
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ message: "Database error", err });
  }
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
