import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noteStore from "../stores/noteStore";
import NoteCard from "../components/NoteCard";
import CourseDropdown from "../components/CourseDropdown";


function NoteList() {
    const notes = noteStore((state) => state.notes);
    const initializeNotes = noteStore((state) => state.initializeNotes);
    const [filteredList, setFilteredList] = useState([]);
    const [selectedFilter, setSelectedFilter] =  useState("all");

    useEffect(() => {
        initializeNotes();
    }, []);

    useEffect(() => {
        if (selectedFilter === "all") {
            setFilteredList(notes);
        } else {
            setFilteredList(notes.filter((note) => note.course.name === selectedFilter));
        }
    }, [notes, selectedFilter]);


    // Filter notes by the course selected in the dropdown component
    const HandleListFiltering = ( courseName ) => {
        setSelectedFilter(courseName);
    }
    
    return (
        <div className="sm:w-full md:w-11/12 lg:w-2/4">
            <Link 
                to="/" 
                className=" w-20 px-4 py-2 text-center text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-600 transition-all">
                Back
            </Link>
            
            <CourseDropdown OnCourseChange={HandleListFiltering} />

            <div>
                { 
                    filteredList.length > 0 ? (
                        filteredList.map((note) => {
                            return <NoteCard key={note.id} timestamp={note.timestamp} course={note.course.name} courseid={note.course.id} text={note.text} />
                        })
                    ) : (
                        <NoteCard timestamp="" course="" courseid="" text="Ei muistiinpanoja!" />
                    )
                }
            </div>
        </div>
    )
}

export default NoteList