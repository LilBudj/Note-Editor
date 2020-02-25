import React from "react"
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";
import Note from "../components/note/Note";

let container = null;
beforeEach( () => {
    container = document.createElement("div");
    document.body.appendChild(container)
});

afterEach( () => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("renders track correctly", () => {
    act( () => {
        render(<Note text={"What to do..."} tags={["#toDo"]}/>, container)
    });

    expect(container.textContent).toBe("What to do... #toDo  EditDelete");
});