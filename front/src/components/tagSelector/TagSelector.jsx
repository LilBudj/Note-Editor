import React, {useState} from "react";
import {Input, Button} from "antd";
import style from "./tagSelector.module.css"

const TagSelector = (props) => {
    const [input, setInput] = useState("");

    const sort = () => {
      props.sort(input)
    };

    return(
        <div className={style.mainSelector}>
            <Input className={style.inputArea} placeholder={"Sort by tag..."} value={input} onChange={(e) => {setInput(e.currentTarget.value)}}/>
            <Button onClick={sort} className={style.click}>Sort</Button>
        </div>
    )
};

export default TagSelector
