import React, {useState} from "react";
import style from "./Note.module.css";
import {Button, Input} from "antd"

const Note = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [inputText, setInputText] = useState(props.text);
    const [tags, setTags] = useState(props.tags);

    const updateNote = () => {
        props.updateNote(inputText, props.id, tags);
        setEditMode(false)
    };
    const deleteNote = () => {
        props.deleteNote(props.id)
    };
    const deleteTag = (tag) => {
        props.deleteTag(props.id, tag)
    };
    const addTags = (input) => {
        let tag = input.slice(input.indexOf("#") + 1, input.indexOf(" ", input.indexOf("#") + 1));
        if (!!tag) {
            setTags([...tags, tag])
        }
    };

    let tagsArray = tags.map(t => <span className={style.tag} onClick={() => deleteTag(t)}>{t}  </span>);
    const textBlocks = inputText.split(" ")
        .map(b => <span className={(props.tags.includes(b)?style.highlight:"")}>{b} </span>);

    return (
        <div className={style.container}>
            {(!editMode) ? <div className={style.text}>
                {textBlocks}
            </div> : <Input value={inputText} onChange={(e) => {
                setInputText(e.currentTarget.value)
            }} onBlur={(e) => {
                addTags(e.currentTarget.value);
                updateNote()}}/>}
            <div className={style.tags}>
                {tagsArray}
            </div>
            <div className={style.toolBar}>
                <Button onClick={() => setEditMode(true)} className={style.edit}>Edit</Button>
                <Button onClick={deleteNote} className={style.edit}>Delete</Button>
            </div>
        </div>
    )
};

export default Note