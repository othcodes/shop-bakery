const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const jwt = require("jsonwebtoken");
const { storage, users } = require("./data.js");


app.get("/api/storage", urlencodedParser, (req, res) => {
  return res.json(storage);
});

app.post("/api/order", jsonParser, (req, res) => {
  const items = req.body.items;
  let error = "";
  let errorItem = "";

  items.every((item) => {
    const filtered = storage.filter((el) => el.name === item.name);
    const match = filtered.length ? filtered[0] : null;

    if (item.quantity > match.stock) {
      error = `There are not enough ${item.name} in stock`;
      errorItem = match.name;
      return false;
    }

    match.stock = match.stock - item.quantity;
    return true;
  });

  if (error) {
    return res.status(400).json({ error, errorItem });
  }
  res.json({ message: "success" });
});

app.post("/api/storage", jsonParser, (req, res) => {
  let products = [];
  let id = null;
  let cart = JSON.parse(req.body.cart);
  if (!cart) return res.json(products);

  for (let i = 0; i < storage.length; i++) {
    id = storage[i].id.toString();

    if (cart.hasOwnProperty(id)) {
      storage[i].quantity = cart[id];
      products.push(storage[i]);
    }
  }
  return res.json(products);
});

app.post("/api/auth", jsonParser, (req, res) => {
  let user = users.filter((user) => {
    return user.name == req.body.name && user.password == req.body.password;
  });
  if (user.length) {
    // create a token using user name and password valid for 2 hours
    let token_payload = { name: user[0].name, password: user[0].password };
    let token = jwt.sign(token_payload, "jwt_secret_password", {
      expiresIn: "2h",
    });
    let response = {
      message: "Token Created, Authentication Successful!",
      token: token,
    };

    // return the information including token as JSON
    return res.status(200).json(response);
  } else {
    return res.status("409").json("Authentication failed. admin not found.");
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
