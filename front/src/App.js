import React from 'react';
import './App.css';
import 'antd/dist/antd.css'
import NoteCreatorContainer from "./components/noteCreator/NoteCreatorContainer";
import NotesCollectionContainer from "./components/NotesCollection/NotesCollectionContainer";
import TagSelectorContainer from "./components/tagSelector/TagSelectorContainer";

class App extends React.Component {

  render = () => {
    return (
        <div className="App">
            <NoteCreatorContainer/>
            <NotesCollectionContainer/>
            <TagSelectorContainer/>
        </div>
    );
  }
}

export default App;
