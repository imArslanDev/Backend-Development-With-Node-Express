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

module.exports = checkToken