const express = require('express');
const port = process.env.PORT || process.env.IP || 3000;

const app = express();


app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home")
});

app.get("/about", (req, res) => {
    res.render("about")
});

app.listen(port, () => console.log("Dorema Spire Has Started!"));