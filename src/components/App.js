import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes"

function App() {
  return (
    <div>
      <Header />
      <dl>
      {notes.map( newNotes => (
      <Note 
         key={newNotes.key}
         title={newNotes.title}
         content={newNotes.content}
      />
      ))}
      </dl>
      <Footer />
    </div>
  );
}

export default App;

