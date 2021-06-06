import React from 'react'
import { useState } from "react";
import { connect } from 'react-redux';
import { addNotes } from '../Actions/noteActions';


function Noteform(props) {
    const[state,notestate]=useState({
        title:"",
        date:"",
        note:"",
    })
    function handleonChange(event){
                notestate({
                    ...state,
                    [event.target.name]:event.target.value,
                })
                console.log(notestate)
                
            }
    function handleonclick() {
        let noteId=10000 + Math.random() * 100000000 ;
        let note={...state , id:noteId}
        console.log(note)
        props.addNotes(note)
    }
    return (
        <div >
            <div className="row">
                <div className="col-md-6">
                <input type="date" name="date" value={state.date} className="datefield" onChange={handleonChange}></input>
                </div>
                
                <div className="col-md-6">
                <button type="Submit" className="savebtn" onClick={handleonclick}>
                <span class="glyphicon glyphicon-floppy-disk" aria-hidden="true"></span>
                </button>
                </div>
            </div>
            <div className="row">
                
                <div className="text-center">
                <input type="text" name="title" value={state.title}  className="titlefield text-center" placeholder="Enter title"onChange={handleonChange} />
                </div>
                
            </div>
            <div className="text-center">
            <textarea className="textfield" value={state.note} name="note" onChange={handleonChange}></textarea>
            </div>
            
        </div>
    )
}

export default connect(null,{addNotes})(Noteform);
