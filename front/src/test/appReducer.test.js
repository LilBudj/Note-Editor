import {appReducer, deleteNoteAC, deleteTagAC} from "../redux/appReducer";

it('note should be deleted', () => {
    let action = deleteNoteAC(1);
    let state = {
        notes: [
            {text: "To wash the dishes", tags: ["toDo"], id: 0},
            {text: "What toDo...", tags: ["toDo"], id: 1},
        ]
    };
    let newState = appReducer(state, action);
    expect(newState.notes.length).toBe(1)
});

it('tag should be deleted', () => {
    let action = deleteTagAC(1, "toDo");
    let state = {
        notes: [
            {text: "To wash the dishes", tags: ["toDo"], id: 0},
            {text: "What toDo...", tags: ["toDo"], id: 1},
        ]
    };
    let newState = appReducer(state, action);
    expect(newState.notes[1].tags.length).toBe(0)
});

it('')