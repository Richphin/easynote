import React, { useState } from 'react'
import { connect } from 'react-redux'
import { updateNote } from '../Actions/noteActions'




function EditNoteform(props) {
    const[state,notestate]=useState({
        title:props.note.title,
        date:props.note.date,
        note:props.note.note,
    })
    function handleonChange(event){
                notestate({
                    ...state,
                    [event.target.name]:event.target.value,
                })
                console.log(notestate)
                
            }
    function handleonclick() {
        
        let note={...state , id:props.note.id}
        console.log("upat", note)
        props.updateNote(props.note.id, note)
        props.hideModal()
    }
    return (
        <div >
            <div className="row">
                <div className="col-md-6">
                <input type="date" name="date" value={state.date} className="datefield" onChange={handleonChange}></input>
                </div>
            
                <div className="col-md-6">
                <button type="Submit" className="savebtn" onClick={handleonclick}>update</button>
                </div>
            </div>
            <div className="row">
                
                <div className="text-center">
                <input type="text" name="title" value={state.title}  className="titlefield text-center" placeholder="Enter title"onChange={handleonChange} />
                </div>
                
            </div>
            <div>
            <textarea className="textfield" value={state.note} name="note" onChange={handleonChange}></textarea>
            </div>
            
        </div>
    )
}

let mapDispatchToProps={
    updateNote
}
let mapStateToProps=()=>{}
export default connect(mapStateToProps, mapDispatchToProps)(EditNoteform);
