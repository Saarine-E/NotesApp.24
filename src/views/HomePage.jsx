import { Link } from "react-router-dom"
import Button from "../components/Button"
import {useEffect} from "react"
import noteStore from "../stores/noteStore"
import courseStore from "../stores/courseStore"

function HomePage(){
    const initializeCourses = courseStore((state) => state.initializeCourses);
    const initializeNotes = noteStore((state) => state.initializeNotes);

    const linkStyle = "w-48 px-4 py-2 text-center text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-600 transition-all";

    useEffect(() => {
                initializeCourses();
                initializeNotes();
        }, []);

    return (
        <div className="border-4 p-2 w-fit">
            <nav className="flex flex-col gap-4">
                <Link 
                    to="/create-notes" 
                    className={linkStyle}>
                    Create notes for class
                </Link>
                
                <Link 
                    to="/list-notes" 
                    className={linkStyle}>
                    List notes
                </Link>
                
                <Link 
                    to="/add-courses" 
                    className={linkStyle}>
                    Add courses
                </Link>
            </nav>
        </div>
    )
}

export default HomePage