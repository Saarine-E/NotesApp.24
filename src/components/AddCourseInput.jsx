import { useState } from "react";
import Button from "./Button"

function AddCourseInput({ OnClickFnc }){
    const [inputValue, setInputValue] = useState("");

    const HandleClick = (e) => {
        OnClickFnc(inputValue);
    }

    return (
        <div className="grid grid-cols-4 col-span-4 row-span-2">
            <label htmlFor="inputfield" className="mx-2 px-3 py-1 col-span-3 border rounded-t-md bg-blue-500 text-white border-slate-700">Course Name:</label>
            <input type="text" id="inputfield" onChange={(e) => setInputValue(e.target.value)} placeholder="Enter name" className="mx-2 px-3 shadow-inner shadow-slate-400 border-x border-b border-slate-700 rounded-b-md col-span-3 row-start-2" />
            <button 
                className="w-full px-4 py-2 text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-600 transition-all col-start-4 row-start-2"
                onClick={HandleClick}
            >
                Add
            </button>
        </div>
    )
}

export default AddCourseInput