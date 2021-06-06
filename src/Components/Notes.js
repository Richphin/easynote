import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { connect } from 'react-redux'
import { deleteNote } from '../Actions/noteActions';
import EditNoteform from './EditNoteform';





function Notes(props) {
    const [displaymodal,setshowmodal] =useState(false);
    function showModal() {
        setshowmodal(true);
    }

    function hideModal() {
        setshowmodal(false);
    }
    return (
        <div className="note">
            <div className="row">
                <div className="col-md-2">
                    <p>{props.note.date}</p>
                </div>
                <div className="col-md-8 text-center">
                    <strong>{props.note.title}</strong>
                </div>
                
                <div className="col-md-2">
                    <div className="col-md-6">
                        <button className="updatebtn" onClick={showModal}>
                        <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                        </button>
                    </div>
                    <Modal show={displaymodal} onHide={hideModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Notes</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <EditNoteform
                            note={props.note}
                            
                            hideModal={hideModal}
                        />
                    </Modal.Body>


                </Modal>
                    <div className="col-md-6">
                        <button className="deletebtn" onClick={() => {props.deleteNote(props.note.id)}} >
                        <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <p>
                {props.note.note}
                </p>
            </div>
            
        </div>
        
        
        
    )
}

let mapDispatchToProps ={
    deleteNote,
}
let mapStateToProps=() =>{}


export default connect(mapStateToProps, mapDispatchToProps)(Notes)
;
