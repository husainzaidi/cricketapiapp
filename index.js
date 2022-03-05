const express = require("express");
const fs = require('fs');
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
const dataPath = './data.json';

const readFile = (
    callback,
    returnJson = false,
    filePath = dataPath,
    encoding = 'utf8'
) => {
    fs.readFile(filePath, encoding, (err, data) => {
        if (err) {
            throw err;
        }

        callback(returnJson ? JSON.parse(data) : data);
    });
};

const writeFile = (
    fileData,
    callback,
    filePath = dataPath,
    encoding = 'utf8'
) => {
    fs.writeFile(filePath, fileData, encoding, err => {
        if (err) {
            throw err;
        }

        callback();
    });
};


app.get('/', (req, res) => {
    readFile(data => {
        res.send(data);
    }, true);
});

let port = process.env.PORT || 3000;
app.get("/", (req, res) => {
    res.send("www.google.com");
});

app.get("/news", (req, res) => {
    res.send(news);
})
app.post("/news", (req, res) => {
    readFile(data => {
        const newnews = Date.now().toString();
        data[newnews] = req.body;
        writeFile(JSON.stringify(data, null, 2), () => {
            res.status(200).send('new news added');
        });
    }, true);
});
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