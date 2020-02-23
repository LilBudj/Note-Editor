import React from 'react';
import './App.css';
import 'antd/dist/antd.css'
import NoteCreatorContainer from "./components/noteCreator/NoteCreatorContainer";

class App extends React.Component {

  render = () => {
    return (
        <div className="App">
            <NoteCreatorContainer/>
        </div>
    );
  }
}

export default App;
