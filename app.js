const express = require("express");
const cookieParser = require("cookie-parser");
var cors = require("cors");
const app = express();
const port = 8001;
const logparserRoutes = require('./logparser/routes')

var corsOptions = {
  origin: ["http://localhost:3000"], // to access api's only to this domains/origins
  optionsSuccessStatus: 200,
  credentials: true, // to set serverside cookie in browser
  withCredentials: true, // to set serverside cookie in browser
};

// Middlewares
app.use(cookieParser()); // to parse cookies
app.use(express.json()); // to convert req.body into json else it will got undefined/null
app.use(express.urlencoded({ extended: true }));  // parse incoming requests with urlencoded payloads
app.use(cors(corsOptions));  // cross origin resousrce sharing

// Routes Middlewares
app.use(logparserRoutes);

app.listen(port, () => {
  console.log(`Server started at port no. ${port}`);
  // console.log("environments", process.env);
});
