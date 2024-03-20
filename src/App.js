import React, { useState } from "react";
import TextUtils from "./pages/TextUtils";
// import News from "./pages/News";
import Header from "./components/Header";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <>
      <Header />
      <TextUtils />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
            <Note
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
            />
        );
      })}
      {/* <News /> */}
    </>
  );
}

export default App;
