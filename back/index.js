const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const ops = require("./repository");
const responseConstructor = require("./responseConstructor");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    console.log(ops.addNote("uuu"));
    res.send(responseConstructor
        .createResponse(ops.getNotes()))
});

app.post('/', (req, res) => {
    res.send(responseConstructor.createResponse(ops.addNote(req.body.note.text)))
});

app.listen(8000, () => {
    console.log("App is listening on port 8000")
});