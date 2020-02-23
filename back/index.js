const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const getNotes = require("./repository");
const addNote = require("./repository");
const createResponse = require("./responseConstructor");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send(createResponse(getNotes()))
});

app.post('/', (req, res) => {
    addNote(req.body.text);
    res.send(createResponse())
});

app.listen(8000, () => {
    console.log("App is listening on port 8000")
});