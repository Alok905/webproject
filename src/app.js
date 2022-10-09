const express = require("express");
const path = require("path");
const hbs = require("hbs");

const port = process.env.PORT || 8000;

const app = express();

//static path
const staticPath = path.join(__dirname, "..", "public");

//view engine setting
const viewsPath = path.join(__dirname, "..", "templates", "views");
const partialsPath = path.join(__dirname, "..", "templates", "partials");
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

app.get("", (req, res) => {
  res.render("index");
});

app.use(express.static(staticPath));
app.get("/weather", (req, res) => {
  res.render("weather");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("*", (req, res) => {
  res.render("404error", {
    errorMsg: 'OOPS!!  Page not found',
  });
});

app.listen(port, () => {
  console.log(`Listening to ${port}`);
});
