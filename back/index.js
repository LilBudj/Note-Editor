const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const ops = require("./repository");
const responseConstructor = require("./responseConstructor");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send(responseConstructor
        .createResponse(ops.getNotes()))
});

app.post('/', (req, res) => {
    ops.addNote(req.body.text);
    res.send(responseConstructor.createResponse())
});

app.listen(8000, () => {
    console.log("App is listening on port 8000")
});