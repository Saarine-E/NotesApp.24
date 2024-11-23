import NoteCardText from "./NoteCardText"
import noteStore from "../stores/noteStore"

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
                onClick={HandleClick}>
                <img src="/src/assets/delete_24dp.png" 
                    alt="Delete" 
                    className=" max-h-6 text-slate-700" 
                />
            </button>
            <NoteCardText text={props.text} />
        </div>
    )
}

export default NoteCard