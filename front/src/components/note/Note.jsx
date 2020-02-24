import React, {useState} from "react";
import style from "./Note.module.css";
import {Button, Input} from "antd"

const Note = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [inputText, setInputText] = useState(props.text);
    debugger
    const tags = props.tags.map(t => <span className={style.tag}>{t}  </span>);
    return(
        <div className={style.container}>
            {(!editMode)?<div className={style.text}>
                {props.text}
            </div> : <Input value={inputText} onChange={(e) => {setInputText(e.currentTarget.value)}}/>}
            <div className={style.tags}>
                {tags}
            </div>
            <div className={style.toolBar} >
                    <Button onClick={() => setEditMode(true)} className={style.edit}>Edit</Button>
            </div>
        </div>
    )
};

export default Note