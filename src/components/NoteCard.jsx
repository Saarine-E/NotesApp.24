import NoteCardText from "./NoteCardText"
import noteStore from "../stores/noteStore"
import { AiOutlineClose } from "react-icons/ai"

function NoteCard(props)
{
    const removeNote = noteStore((state) => state.removeNote);
    function HandleClick(){
        removeNote(props.text);
    }

    return (

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
    )
}

export default NoteCard