import React, {useEffect} from "react";
import style from "./NotesCollection.module.css";
import Note from "../note/Note";

const NotesCollection = (props) => {
    useEffect(() => {
       props.getNotes()
    }, []);
    const notes = props.notes.map(n => <Note text={n.text}/>);
  return(
      <div className={style.collection}>
          {notes}
      </div>
  )
};

export default NotesCollection