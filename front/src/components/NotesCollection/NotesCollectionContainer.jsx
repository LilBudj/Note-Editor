import React from "react";
import {connect} from "react-redux";
import NotesCollection from "./NotesCollection";
import {getNotesThunkCreator} from "../../redux/appReducer";

class NotesCollectionContainer extends React.Component {

    render = () => <NotesCollection notes={this.props.notes} getNotes={this.props.getNotes}/>
}

const mapStateToProps = (state) => {
  return {
      notes: state.notes
  }
};

export default connect(mapStateToProps, {getNotes: getNotesThunkCreator})(NotesCollectionContainer)
