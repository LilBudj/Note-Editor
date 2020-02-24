import React from "react";
import {connect} from "react-redux";
import NotesCollection from "./NotesCollection";
import {
    deleteNoteThunkCreator,
    deleteTagThunkCreator,
    getNotesThunkCreator,
    updateNoteThunkCreator
} from "../../redux/appReducer";

class NotesCollectionContainer extends React.Component {
    render = () => <NotesCollection notes={this.props.notes} deleteNote={this.props.deleteNote}
    getNotes={this.props.getNotes} updateNote={this.props.updateNote} deleteTag={this.props.deleteTag}/>
}

const mapStateToProps = (state) => {
  return {
      notes: state.notes
  }
};

export default connect(mapStateToProps, {
    getNotes: getNotesThunkCreator,
    updateNote: updateNoteThunkCreator,
    deleteNote: deleteNoteThunkCreator,
    deleteTag: deleteTagThunkCreator
})(NotesCollectionContainer)
