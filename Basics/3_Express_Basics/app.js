const express = require("express");
const checkToken = require("./checkTokenMiddlware");
const checkPassword = require("./checkPasswordMiddleware");

const PORT = 3000;
const app = express();
app.use(express.json());


// Routes
app.get("/", (req, res) => res.send({ status: 1, msg: "Home Page API" }));

// Route Level Midddleware Example
app.get("/news", checkToken, checkPassword, (req, res) => {
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

app.get("/news/:id", (req, res) => {
  const { id } = req.params;
  res.send(`News id: ${id}`);
});

app.post("/login", (req, res) => {
  console.log(req.body);
  res.status(200).json({
    status: 1,
    msg: "Login API",
    bodyData: req.body,
    queryData: req.query,
  });
});

app.listen(PORT, () => {
  console.log(`App is listening on PORT:${PORT}`);
});
