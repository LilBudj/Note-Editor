const notes = {
    notes: [
    {text: "To wash the dishes", tags: ["#toDo"], id: 0},
    {text: "What toDo...", tags: ["#toDo"], id: 1},
    {text: "To go for a walk", tags: ["#toDo"], id: 2},
    {text: "Learn to code", tags: ["#toDo"], id: 3},
],
    nextId: 4
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
const updateNote = (text, id, tags) => {
    notes.notes = notes.notes.map(n => {
        if (n.id === id){
            n.text = text;
            n.tags = tags
        }
        return n
    });
};
const deleteNote = (id) => {
    notes.notes = notes.notes.filter(n => n.id !== id)
};
const deleteTag = (id, tag) => {
    notes.notes = notes.notes.map(n => {
        if (n.id === id){
            return {...n, tags: n.tags.filter(t => t !== tag)}
        }
        else return n
    });
};

module.exports.getNotes = getNotes;
module.exports.addNote = addNote;
module.exports.updateNote = updateNote;
module.exports.deleteNote = deleteNote;
module.exports.deleteTag = deleteTag;