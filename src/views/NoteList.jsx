import { useEffect } from "react";
import noteStore from "../stores/noteStore";
import NoteCard from "../components/NoteCard";


function NoteList() {
    const notes = noteStore((state) => state.notes);
    const initializeNotes = noteStore((state) => state.initializeNotes)

    useEffect(() => {
        initializeNotes();
    }, []);
    
    return (
        // <>
            <div>
                {
                    notes.map((note) => {
                        return <NoteCard timestamp={note.timestamp} course={note.course.name} text={note.text} />
                    })
                }
            </div>
        // </>
    )
}

export default NoteList

// const people = peopleStore((state) => state.people);