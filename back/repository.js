const notes = {
    notes: [
    {text: "ggg", tags: ["toDo"], id: 0},
    {text: "ggg", tags: ["toDo"], id: 1},
    {text: "ggg", tags: ["toDo"], id: 2},
    {text: "ggg", tags: ["toDo"], id: 3},
    {text: "ggg", tags: ["toDo"], id: 4},
    {text: "ggg", tags: ["toDo"], id: 5},
    {text: "ggg", tags: ["toDo"], id: 6},
],
    nextId: 7
};

const getNotes = () => ({notes: notes.notes});

class Note {
    constructor(text) {
        this.text = text;
        this.tags = ["toDo"];
        this.id = notes.nextId
    }
}

const addNote = (text) => {
    let note = new Note(text);
    notes.notes.push(note);
    notes.nextId++;
    return note
};

module.exports.getNotes = getNotes;
module.exports.addNote = addNote;