import React from "react";
import {connect} from "react-redux";
import Note from "./Note";

class NoteContainer extends React.Component{

    render = () => {
        return <Note/>
    }
};

export default connect()(NoteContainer)