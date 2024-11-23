import { useEffect } from "react";
import noteStore from "../stores/noteStore";
import NoteCard from "../components/NoteCard";
import { Link } from "react-router-dom";


function NoteList() {
    const notes = noteStore((state) => state.notes);
    const initializeNotes = noteStore((state) => state.initializeNotes);

    useEffect(() => {
        initializeNotes();
    }, []);
    
    return (
        <>    
            <Link 
                to="/" 
                className=" w-20 px-4 py-2 text-center text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-600 transition-all">
                Back
            </Link>
            <div>
                {
                    notes.map((note) => {
                        return <NoteCard key={note.id} timestamp={note.timestamp} course={note.course.name} courseid={note.course.id} text={note.text} />
                    })
                }
            </div>
        </>
    )
}

export default NoteList

// const people = peopleStore((state) => state.people);