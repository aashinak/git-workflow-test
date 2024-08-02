import express from "express";

const app = express();
app.listen(3001, () => {
  console.log("chat service firing at 3001");
});
