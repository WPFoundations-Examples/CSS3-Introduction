const express = require("express");
const path = require("path");
const app = express();

const HTTP_PORT = process.env.PORT || 8080;

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/index.html"));
});

app.get("/no-css", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/no-css.html"));
});

app.get("/with-css", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/with-css.html"));
});


// Handle '404' errors

app.use((req, res) => {
  res.status(404).send("Page Not Found");
});

// listen on HTTP_PORT

app.listen(HTTP_PORT, ()=>{console.log("Express http server listening on: " + HTTP_PORT);});