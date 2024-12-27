import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noteStore from "../stores/noteStore"
import courseStore from "../stores/courseStore"
import AddNoteInput from "../components/AddNoteInput";
import CourseDropdown from "../components/CourseDropdown";

function AddNotes(){
    const courses = courseStore((state) => state.courses);
    const initializeCourses = courseStore((state) => state.initializeCourses);
    const [coursesExist, SetCoursesExist] = useState(false);
    const [courseName, SetSelectedCourse] = useState(1);
    const [courseLocked, SetCourseLock] = useState(false);

    const addNote = noteStore((state) => state.addNote);
    const initializeNotes = noteStore((state) => state.initializeNotes);
    const [currentNotes, SetCurrentNotes] = useState([]);
    
    // Handle the API fetching with courses and notes
    useEffect(() => {
            initializeCourses();
            initializeNotes();
            console.debug(courses);
    }, []);

    // Handle whether courses exist in the store array
    useEffect(() => {
        if(courses.length > 0){
            SetCoursesExist(true);
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
        SetCourseLock(true);
        SetCurrentNotes(...currentNotes, text);
        addNote(text, courseName);
    }

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
                            <CourseDropdown OnCourseChange={HandleCourseSelect} />
                            <AddNoteInput OnClickFnc={HandleNewNote} />
                        </>
                    ) : (
                        <>
                            <p className="p-1 h-8">{courseName}</p>
                            <AddNoteInput OnClickFnc={HandleNewNote} />
                        </>
                    )
                ) : (
                    <p>Add courses before adding notes</p>
                )
            }
        </div>
    )
}

export default AddNotes