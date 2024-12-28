import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noteStore from "../stores/noteStore"
import courseStore from "../stores/courseStore"
import AddNoteInput from "../components/AddNoteInput";
import CourseDropdown from "../components/CourseDropdown";
import NoteCardText from "../components/NoteCardText";

function AddNotes(){
    const courses = courseStore((state) => state.courses);
    const initializeCourses = courseStore((state) => state.initializeCourses);
    const [coursesExist, SetCoursesExist] = useState(false);
    const [courseName, SetSelectedCourse] = useState("-");
    const [courseLocked, SetCourseLock] = useState(false);

    const addNote = noteStore((state) => state.addNote);
    const initializeNotes = noteStore((state) => state.initializeNotes);
    const [currentNotes, SetCurrentNotes] = useState([]);

    
    // Handle the API fetching with courses and notes
    useEffect(() => {
            initializeCourses();
            initializeNotes();
    }, []);

    // Handle toggling between showing or hiding the interface, depending on whether courses exist
    useEffect(() => {
        if(courses.length > 0){
            SetCoursesExist(true);
            SetSelectedCourse(courseStore.getState().courses[0].name);
        } else {
            SetCoursesExist(false);
        }
    }, [courses])

    // Handle selecting course from dropdown
    const HandleCourseSelect = ( courseName ) => {
        if(!courseLocked){
            SetSelectedCourse(courseName);
        }
    }
    
    // Handle adding new notes
    const HandleNewNote = ( text ) => {
        console.debug(currentNotes);
        SetCourseLock(true);
        SetCurrentNotes([...currentNotes, text]);
        addNote(text, courseName);
    }
// className="w-1/3 grid grid-cols-5 grid-rows-2"
    return (
        <div className="sm:w-full md:w-11/12 lg:w-2/4">
            <Link 
                to="/" 
                className=" w-20 px-4 py-2 text-center text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-600 transition-all row-start-2">
                Back
            </Link>
            { 

                coursesExist ? ( // If there are no courses, hide components for adding notes
                    courseLocked != true ? ( // Remove course dropdown after first note is added, until user leaves the view
                        <>
                            <CourseDropdown OnCourseChange={HandleCourseSelect} removeAllOption={true} />
                            <AddNoteInput OnClickFnc={HandleNewNote} />
                        </>
                    ) : (
                        <>
                            <p className="pl-1 pt-2 h-8 m-4">{"Selected course: " + courseName}</p>
                            <AddNoteInput OnClickFnc={HandleNewNote} />
                        </>
                    )
                ) : (
                    <p>Add courses before adding notes</p>
                )
            }
            <div className="w-full grid mx-2 mt-4 border rounded-md overflow-hidden bg-slate-200 border-slate-700 divide-y divide-slate-700 col-span-5">
                { 
                    currentNotes.length > 0 && currentNotes != null ? (
                        currentNotes.map((note, index) => {
                            return <NoteCardText key={index} text={note} />
                        })
                    ) : (
                        <NoteCardText text=" " />
                    )
                }
            </div>
        </div>
    )
}

export default AddNotes