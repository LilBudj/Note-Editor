import React from "react";
import style from "./Note.module.css";

const Note = (props) => {
    return(
        <div className={style.container}>
            <div className={style.text}>
                {props.text}
            </div>
            <div className={style.toolBar}>

            </div>
        </div>
    )
};

export default Note