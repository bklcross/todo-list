const router = require("express").Router();
const path = require("path");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/todo", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/todo.html"));
});

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/404.html"));
});

module.exports = router;
