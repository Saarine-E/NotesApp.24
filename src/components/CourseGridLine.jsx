import { AiOutlineClose } from "react-icons/ai"
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

// const removeNote = noteStore((state) => state.removeNote);
//     function HandleClick(){
//         removeNote(props.text);
//     }




{/*
<div className="grid grid-cols-3 gap-x-4 mt-4 border border-slate-700 rounded-md bg-blue-500 text-white">
    <p className="p-1">{props.timestamp}</p>
    <p className="p-1">{props.course + " (id " + props.courseid + ")"}</p>
    <button 
        className="justify-self-end"
        title="Delete" 
        onClick={HandleClick}>
        <AiOutlineClose size={32} className="fill-slate-700 hover:fill-red-700" />
    </button>
    <NoteCardText text={props.text} />
</div>
*/}