import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getAllNotes } from '../Actions/noteActions';
import Notes from './Notes'



function Notelist(props) {
    useEffect(()=>{
        props.getAllNotes();
    },[]);
    return (
        <div>
            {props.notes.map((note) => (<Notes note={note} /> ))}
        </div>

    )
}

function mapStateToProps(state){
    return{
         notes: state.notes,
    }
}
const mapDispatchToProps = {
    getAllNotes,
  };

export default connect(mapStateToProps,mapDispatchToProps)(Notelist);
