const express = require("express");

const app = express();

app.get("/hello", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

app.post("/login", (req, res) => {
  res.send({ Message: "user logged in successfully" });
});

app.put("/update", (req, res) => {
  res.send({ Message: "user updated successfully" });
});

app.get("/category", (req, res) => {
  res.send({ Message: "user category successfully" });
});

app.post("/logout", (req, res) => {
  res.send({ Message: "user logout successfully" });
});

app.delete("/delete", (req, res) => {
  res.send({ Message: "user deleted successfully" });
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
