import React from "react"
import {Input, Button} from "antd"
import style from "./NoteCreator.module.css"

const NoteCreator = (props) => {

  return(
      <div className={style.container}>
          <Input className={style.mainInput} value={props.inputValue} onChange={(e) => props.setInputValue(e.currentTarget.value)}/>
          <Button onClick={props.addNote} classname={style.addingButton}>Add</Button>
      </div>
  )
};

export default NoteCreator