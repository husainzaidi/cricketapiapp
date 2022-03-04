const express = require("express");
const res = require("express/lib/response");
const app = express();
const importData = require("./data.json");
let port = process.env.PORT || 3000;
app.get("/", (req, res) => {
    res.send("hello world");
});

app.get("/players", (req, res) => {
    res.send(importData);
})


app.listen(port, () => {
    console.log('example app is litsening on port http://localhost:${port}');
});