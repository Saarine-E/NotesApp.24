import courseStore from "../stores/courseStore";

function CourseGridLine(props){

    const removeCourse = courseStore((state) => state.removeCourse);
    function HandleClick(){
        removeCourse(props.id);
    }

    return (
        <div className="grid grid-cols-6">
            <p className="p-2">{props.id}</p>
            <p className="p-2 col-span-5">{props.name}</p>
        </div>
    )
}

export default CourseGridLine
