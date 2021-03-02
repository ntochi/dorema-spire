const express = require('express');
const port = process.env.PORT || process.env.IP || 3000;

const app = express();

// View engine setup
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");



// Routes
app.get("/", (req, res) => {
    res.render("home")
});

app.get("/about", (req, res) => {
    res.render("about")
});

app.get("/more-work", (req, res) => {
    res.render("more-work")
});


app.listen(port, () => {
    console.log('Dorema Spire Has Started');
});