const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./db-pisos");
const path = require("path");
const PORT = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

//get all todos
app.get("/db/pisos", async (req, res) => {
  try {
    const all = await db;
    res.json(all);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/db/pisos/:file", async (req, res) => {
  try {
    const { file } = req.params;
    const path = `${__dirname}/db-img/${file}`;
    res.sendFile(path);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(PORT, () => {
  console.log(`server has started on port ${PORT}`);
});
