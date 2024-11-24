import { useEffect } from "react";
import courseStore from "../stores/courseStore"
import { Link } from "react-router-dom";
import CourseGridLine from "../components/CourseGridLine";
import AddCourseInput from "../components/AddCourseInput";



function CourseList(){

    const courses = courseStore((state) => state.courses);
    const initializeCourses = courseStore((state) => state.initializeCourses);
    const addCourse = courseStore((state) => state.addCourse);

    useEffect(() => {
        initializeCourses();
    }, []);

    const HandleNewCourse = ( courseName ) => {
        addCourse(courseName);
    }

    return (
        <div className="w-1/3 grid grid-cols-5 grid-rows-2">
            <Link 
                to="/" 
                className=" w-20 px-4 py-2 text-center text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-600 transition-all row-start-2">
                Back
            </Link>

            <AddCourseInput OnClickFnc={HandleNewCourse} />
           
            <div className="w-full grid mt-4 border rounded-md bg-slate-200 border-slate-700 divide-y divide-slate-700 col-span-5">
                <div className="grid grid-cols-6 self-center text-white border-slate-700 bg-blue-500">
                    <p className="p-2">ID</p>
                    <p className="p-2 col-span-5">Name</p>
                </div>
                { courses.length > 0 ? (

                    courses.map((course) => {
                        return <CourseGridLine key={course.id} id={course.id} name={course.name} />
                    })
                ) : (
                    <p className="p-2 text-center text-xl">Ei kursseja!</p>
                )
                }
            </div>
        </div>
    )
}

export default CourseList