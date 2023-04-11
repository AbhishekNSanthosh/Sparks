const express = require("express");
const cors = require("cors");
const passport = require("passport");
require("dotenv").config();
const cookieSession = require("cookie-session");
const passportStrategy = require("./passport");
const app = express();
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

mongoose.connect("mongodb+srv://Abhi:Abhi@cluster0.cmmfi8o.mongodb.net/SPARKZDB?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log('MongoDB connected'))
	.catch((err) => console.log('Error connecting to MongoDB', err));

app.use(
	cookieSession({
		name: "session",
		keys: ["Sparkz"],
		maxAge: 24 * 60 * 60 * 100,
	})
);

app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

app.use(
	cors({
		origin: "http://localhost:3000",
		methods: "GET,POST,PUT,DELETE",
		credentials: true,
	})
);
app.use(bodyParser.json())
app.use('/public',express.static('public'))
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
app.use("/auth", authRoute);
app.use("/users", userRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listenting on port ${port}...`));
