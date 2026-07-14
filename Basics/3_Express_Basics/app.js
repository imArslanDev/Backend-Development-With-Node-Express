const express = require("express");

const PORT = 3000;
const app = express();
app.use(express.json());

const myToken = "12345";
let checkToken = (req, res, next) => {
  if (req.query.token === undefined || req.query.token === "") {
    return res.send({
      status: 0,
      msg: "Please Fill The Token",
    });
  }
  if (req.query.token !== myToken) {
    return res.send({
      status: 0,
      msg: "Please Fill The Correct Token",
    });
  }

  if (req.query.token === myToken) {
    console.log("Token Matched Successfully");
    next();
  }
};

//  Middlewares
app.use(checkToken);

app.use((req, res, next) => {
  const password = "Arslan";

  if (req.query.pass === undefined || req.query.pass === "") {
    return res.send({
      status: 0,
      msg: "Please Fill The Password",
    });
  }
  if (req.query.pass !== password) {
    return res.send({
      status: 0,
      msg: "Please Fill The Correct Password",
    });
  }

  if (req.query.pass === password) {
    console.log("Correct Password");
    next();
  }
});

// Routes
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
