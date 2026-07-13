const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => res.send({ status: 1, msg: "Home Page API" }));

app.get("/news", (req, res) => {
  res.send({
    status: 1,
    data: [
      {
        newsTitle: "Open AI's New Model",
        newsDesc: "Open Ai's just drop their most capable model called GPT 5.5",
      },
      {
        newsTitle: "FIFA World Cup 2026",
        newsDesc: "Explore About FIFA World Cup 2026",
      },
    ],
  });
});

app.listen(PORT, () => {
  console.log(`App is listening on PORT:${PORT}`);
});
