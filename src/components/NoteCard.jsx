import NoteCardText from "./NoteCardText"
import noteStore from "../stores/noteStore"
import { SlTrash } from "react-icons/sl"
import { AiOutlineClose } from "react-icons/ai"

function NoteCard(props)
{
    const removeNote = noteStore((state) => state.removeNote);
    function HandleClick(){
        removeNote(props.text);
    }

    return (

        <div className="grid grid-cols-3 gap-x-4 mt-4 border border-slate-700">
            <p className="p-1">{props.timestamp}</p>
            <p className="p-1">{props.course + " (id " + props.courseid + ")"}</p>
            <button 
                className="justify-self-end"
                title="Delete" 
                onClick={HandleClick}>
                <AiOutlineClose size={32} className="fill-slate-500 hover:fill-red-700" />
                {/* <img src="/src/assets/delete_24dp.svg" 
                    alt="Delete" 
                    className=" max-h-6 hover:fill-red-600" /> */}
            </button>
            <NoteCardText text={props.text} />
        </div>
    )
}

export default NoteCard