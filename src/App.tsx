import { useState } from "react";
import logo from "./assets/logo-audio-notes.svg";
import { NewNoteCard } from "./components/new-note-card";
import { NoteCard } from "./components/note-card";
import { SearchNoteCard } from "./components/search-note-card";

export function App() {
  const [notes, setNotes] = useState([
    { id: 1, date: new Date(), content: "Hello World" },
    { id: 2, date: new Date(), content: "Nota 2" }
  ]);

  function onNoteCreated(content: string){
    const newNote = {
      id: 3,
      date: new Date(),
      content,
    }
    setNotes([newNote, ...notes])
  }

  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={logo} alt="NLW Expert" />

      <SearchNoteCard />

      <div className="h-px bg-slate-700" />

      <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
        <NewNoteCard onNoteCreated={onNoteCreated} />
        {notes.map((note) => {
          return <NoteCard key={note.id} note={note} />;
        })}
      </div>
    </div>
  );
}
