import React from 'react'
import { connect } from 'react-redux'
import Notes from './Notes'


function Notelist(props) {
    console.log('notes',props.notes)
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
export default connect(mapStateToProps,{})(Notelist);
