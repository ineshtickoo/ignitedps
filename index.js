const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
  res.redirect("/epsilon");
});

app.get("/epsilon", (req, res) => {
  res.sendFile(path.join(__dirname, "./epsilon.html"));
});

app.get("/epsilon/prompt", (req, res) => {
  res.sendFile(path.join(__dirname, "./Epsilon2020IntraPrompt.html"));
});

app.get("/epsilon/guidelines", (req, res) => {
  res.sendFile(path.join(__dirname, "./epsilonguidelines.html"));
});

const port = 8080;
app.listen(port || process.env.PORT, () => {
  console.log(`App running on ${port}`);
});
