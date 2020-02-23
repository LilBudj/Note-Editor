const notes = {
    notes: [
    {text: "ggg", id: 0},
    {text: "ggg", id: 1},
    {text: "ggg", id: 2},
    {text: "ggg", id: 3},
    {text: "ggg", id: 4},
    {text: "ggg", id: 5},
    {text: "ggg", id: 6},
],
    nextId: 7
};

const getNotes = () => ({notes: notes.notes});

class Note {
    constructor(text){
        return {text}
    }
    addId(id){
        this.id = id
    }
}

const addNote = (text) => {
    let note = new Note(text);
    note.addId(note.nextId);
    notes.notes.push(note)
};

module.exports.getNotes = getNotes;
module.exports.addNote = addNote;