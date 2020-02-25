import React, {useEffect, useState} from "react";
import style from "./Note.module.css";
import {Button, Input} from "antd"

const Note = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [inputText, setInputText] = useState(props.text);
    const [tags, setTags] = useState(props.tags);
    const [showTagList, setShowTagList] = useState(false);

    useEffect(() => {
        updateNote()
    }, [tags]);

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
        let tagSymbols = [];
        let position = 0;
        while (true) {
            let foundPos = input.indexOf("#", position);
            if (foundPos === -1) break;
            tagSymbols.push(foundPos);
            position = foundPos + 1;
        }

        let newTags = [];
        for (let i = 0; i < tagSymbols.length; i++) {
            newTags.push(input.slice(tagSymbols[i], input.indexOf(" ", tagSymbols[i])));
        }
        if (!!newTags) {
            setTags([...tags, newTags])
        }
    };

    let tagsArray = props.tags.map(t => <span className={style.tag} onClick={() => deleteTag(t)}>{t}  </span>);
    const textBlocks = inputText.split(" ")
        .map(b => <span className={(props.tags.includes(b)?style.highlight:"")}>{b} </span>);

    return (
        <div className={style.container}>
            {(!editMode) ? <div className={style.text}>
                {textBlocks}
            </div> : <Input value={inputText} onChange={(e) => {
                setInputText(e.currentTarget.value)
            }} onBlur={(e) => {
                addTags(e.currentTarget.value)}}/>}
            <div className={style.tags}>
                {tagsArray}
                <Button onClick={()=>setShowTagList(true)}>+</Button>
                {showTagList &&
                    <div>
                <select onBlur={(e) => {debugger
                    setTags([...tags, e.currentTarget.value])}}>
                    <option value={"#toDo"} >#toDo</option>
                    <option value={"#code"} >#code</option>
                    <option value={"#walk"} >#walk</option>
                </select>
                        <Button onClick={()=>setShowTagList(false)}>X</Button>
                    </div>
                }
            </div>
            <div className={style.toolBar}>
                <Button onClick={() => setEditMode(true)} className={style.edit}>Edit</Button>
                <Button onClick={deleteNote} className={style.edit}>Delete</Button>
            </div>
        </div>
    )
};

export default Note