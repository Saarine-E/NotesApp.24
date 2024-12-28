import { useState } from "react";

function AddNoteInput( {OnClickFnc} ){

    const [inputValue, setInputValue] = useState("");
    
    const HandleClick = (e) => {
        if(inputValue != ""){
            OnClickFnc(inputValue);
            setInputValue("");
        }
    }

    return (
        <div className="grid grid-cols-4 col-span-4 row-span-4">
            <label htmlFor="inputfield" className="mx-2 px-3 py-1 col-span-3 border rounded-t-md bg-blue-500 text-white border-slate-700">Note:</label>
            <textarea id="inputfield" value={inputValue} onChange={(e) => setInputValue(e.target.value)} className="mx-2 px-3 h-28 shadow-inner shadow-slate-400 border-x border-b border-slate-700 rounded-b-md col-span-3 row-start-2 row-span-3 break-words" />
            <button 
                className="w-full px-4 py-2 text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-600 transition-all col-start-4 row-start-4"
                onClick={HandleClick}
            >
                Add
            </button>
        </div>
    )

}

export default AddNoteInput