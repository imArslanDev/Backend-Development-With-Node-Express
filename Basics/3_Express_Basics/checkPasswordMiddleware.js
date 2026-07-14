const checkPassword = (req, res, next) => {
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
};

module.exports = checkPassword
