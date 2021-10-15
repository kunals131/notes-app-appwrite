import React from 'react'
import ActionAreaCard from "../card/card";
import './notesContainer.scss'

export  const reloadNotesContainer = ()=>{
    window.location.reload(false);
}

const NotesContainer = (props)=>{
    const [fresh,setfresh] = React.useState(false);

    const freshin = () =>{
        setfresh(!fresh);
    }

    const notes = props.notes;
    return(
        <div className="notes">
            <div className="container">
                {
                    notes.map(note=>(
                        <ActionAreaCard freshin = {freshin} {...props} key={note['$id']} noteId={note['$id']} title={note.title} content={note.content}></ActionAreaCard>
                    ))
                }
                {/* <ActionAreaCard title="lolo" content="Ffffffffff"></ActionAreaCard> */}
            </div>
        </div>
    )
}

export default NotesContainer;