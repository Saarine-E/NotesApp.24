import { useEffect } from "react";
import courseStore from "../stores/courseStore"
import { Link } from "react-router-dom";



function CourseList(){

    const courses = courseStore((state) => state.courses);
    const initializeCourses = courseStore((state) => state.initializeCourses);

    useEffect(() => {
        initializeCourses();
    }, []);

    return courses.length > 0 ? (
        <div>
            <Link 
                to="/" 
                className=" w-20 px-4 py-2 text-center text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-600 transition-all">
                Back
            </Link>
                {
                    courses.map((course) => {
                        return <p key={course.id} >{"id: " + course.id + " name: " + course.name}</p>
                    })
                }
        </div>
    ) : (
        <div>
            <Link 
                to="/" 
                className=" w-20 px-4 py-2 text-center text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-600 transition-all">
                Back
            </Link>
            <p>Ei kursseja!</p>
        </div>
    )
}

export default CourseList