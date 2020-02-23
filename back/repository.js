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

exports.getNotes = () => ({notes: notes.notes});

class Note {
    constructor(text){
        return {text}
    }
    addId(id){
        this.id = id
    }
}

exports.addNote = (text) => {
    let note = new Note(text);
    note.addId(note.nextId);
    notes.notes.push(note)
};