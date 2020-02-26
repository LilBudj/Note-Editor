import React from "react";
import { render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";
import pretty from "pretty";
import NotesCollection from "../components/NotesCollection/NotesCollection";

let container = null;
beforeEach( () => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach( () => {
    unmountComponentAtNode(container);
    container.remove();
    container = null
});

it ('renders tracks correctly', () => {
    act( () => {
        render(<NotesCollection notes={[
            {text: "To wash the dishes", tags: ["toDo"], id: 0},
            {text: "What toDo...", tags: ["toDo"], id: 1},
            {text: "To go for a walk", tags: ["toDo"], id: 2},
            {text: "Learn to code", tags: ["toDo"], id: 3},
        ]} getNotes={getNotesAC} updateNote={updateNoteAC} deleteNote={deleteNoteAC} deleteTag={deleteTagAC}/> , container)
    });

    expect(
        pretty(container.innerHTML)
    ).toMatchInlineSnapshot();
});