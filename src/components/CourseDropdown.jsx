import { useEffect, useState } from "react";
import courseStore from "../stores/courseStore"

function CourseDropdown({ OnCourseChange, removeAllOption = false }){
    const courses = courseStore((state) => state.courses);
    const initializeCourses = courseStore((state) => state.initializeCourses);

    useEffect(() => {
        initializeCourses();
    }, []);

    const ChangeValue = (e) => {
        OnCourseChange(e.target.value);
    }

    return (
        <div className="mt-4 grid grid-cols-4 auto-cols-min">
            <label htmlFor="course-select" className="p-2">Course:</label>
            <select name="course" id="course-select" onChange={(e) => ChangeValue(e)} className="p-2 col-span-2">
                {
                    !removeAllOption ? (
                        <option key="-1" value="all">all</option>   
                    ) : (
                        <></>
                    )
                }
                {courses.map((course) => {
                        return <option key={course.id} value={course.name}>{course.name}</option>
                    })}
            </select>
        </div>
    )
}

export default CourseDropdown