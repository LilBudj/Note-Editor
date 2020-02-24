import React, {useEffect} from "react";
import style from "./NotesCollection.module.css";
import Note from "../note/Note";

const NotesCollection = (props) => {
    useEffect(() => {
       props.getNotes()
    }, []);
    const notes = props.notes.map(n => <Note text={n.text} tags={n.tags} id={n.id} key={n.id}/>);
  return(
      <div className={style.collection}>
          {notes}
      </div>
  )
};

export default NotesCollection