function NoteCardText(props) {
    return (
        <p className="p-2 rounded-b-md bg-slate-200 col-span-3 w-full text-slate-900 break-words h-fit wrap">{props.text}</p>
    )
}

export default NoteCardText