import NoteCardText from "./NoteCardText"

function NoteCard(props)
{
    return (

        <div>
            <p>{props.timestamp}</p>
            <p>{props.course}</p>
            <NoteCardText text={props.text} />
        </div>
    )
}

export default NoteCard