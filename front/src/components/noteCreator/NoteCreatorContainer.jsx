import React, {useState} from "react";
import {useDispatch} from "react-redux";
import NoteCreator from "./NoteCreator";
import {addNoteThunkCreator} from "../../redux/appReducer";

const NoteCreatorContainer = () => {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState("");

    const addNote = () => {
      dispatch(addNoteThunkCreator({text: inputValue}))
    };
    return <NoteCreator addNote={addNote} inputValue={inputValue} setInputValue={setInputValue}/>
};

export default NoteCreatorContainer