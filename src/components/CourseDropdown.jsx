import { useEffect, useState } from "react";
import courseStore from "../stores/courseStore"

function CourseDropdown({ OnCourseChange }){
    const courses = courseStore((state) => state.courses);
    const initializeCourses = courseStore((state) => state.initializeCourses);

    useEffect(() => {
        initializeCourses();
    }, []);

    const ChangeValue = (e) => {
        OnCourseChange(e.target.value);
    }

    return (
        <div className="grid grid-cols-2">
            <label htmlFor="course-select">Course:</label>
            <select name="course" id="course-select" onChange={(e) => ChangeValue(e)} className="p-1">
                <option key="-1" value="all">all</option>
                {courses.map((course) => {
                        return <option key={course.id} value={course.name}>{course.name}</option>
                    })}
            </select>
        </div>
    )
}

export default CourseDropdown