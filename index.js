const express = require("express");
const { json } = require("express/lib/response");
const res = require("express/lib/response");
const app = express();
const news = require("./data.json");
const testresult = require("./testresult.json");
const quiz = require("./quizgames.json");
const stadiums = require("./stadium.json");
const upcomingodi = require("./upcomingodi.json");
const upcomingt20 = require("./upcomingt20.json");
const upcomingtest = require("./upcomingtest.json");
let port = process.env.PORT || 3000;
app.get("/", (req, res) => {
    res.send("www.google.com");
});

app.get("/news", (req, res) => {
    res.send(news);
})
app.get("/overalldetails", (req, res) => {
    res.send(overalldetails);
});
app.get("/quiz", (req, res) => {
    res.send(quiz);
});
app.get("/stadium", (req, res) => {
    res.send(stadiums);
});
app.get("/testresult", (req, res) => {
    res.send(testresult);
});
app.get("/upcomingodi", (req, res) => {
    res.send(upcomingodi);
});
app.get("/upcomingt20", (req, res) => {
    res.send(upcomingt20);
});
app.get("/upcomingtest", (req, res) => {
    res.send(upcomingtest);
});


app.listen(port, () => {
    console.log('example app is litsening on port http://localhost:${port}');
});