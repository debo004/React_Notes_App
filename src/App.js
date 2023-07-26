import react, { useEffect, useState } from 'react';
import NoteContainer from './Components/NoteContainer/NoteContainer';
import Sidebar from './Components/Sidebar/Sidebar';
import './App.css';

function App() {

  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem('notes-app')) || []
  );

  const addNote = (color) => {
    const tempNote = [...notes];

    tempNote.push({
      id: Date.now() + "" + Math.floor(Math.random()*78),
      text: "",
      time: Date.now(),
      color,
    });
    setNotes(tempNote);
  }

  const deleteNote = (id) => {
    const tempNote = [...notes];

    const index = tempNote.findIndex((item) => item.id === id)
    if (index < 0) return;

    tempNote.splice(index, 1);
    setNotes(tempNote);
  }

  useEffect(() => {
    localStorage.setItem('notes-app', JSON.stringify(notes));
  }, [notes]);

  const updateText = (text, id) => {
    const tempNote = [...notes];

    const index = tempNote.findIndex((item) => item.id === id)
    if (index < 0) return;

    tempNote[index].text = text;
    setNotes(tempNote);
  }

  return (
    <div className="App">
      <Sidebar addNote = {addNote} />
      <NoteContainer notes = {notes} deleteNote = {deleteNote} updateText = {updateText} />
    </div>
  );
}

export default App;
