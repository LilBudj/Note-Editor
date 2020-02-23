import React from 'react';
import './App.css';
import 'antd/dist/antd.css'
import NoteCreatorContainer from "./components/noteCreator/NoteCreatorContainer";
import NotesCollectionContainer from "./components/NotesCollection/NotesCollectionContainer";

class App extends React.Component {

  render = () => {
    return (
        <div className="App">
            <NoteCreatorContainer/>
            <NotesCollectionContainer/>
        </div>
    );
  }
}

export default App;
