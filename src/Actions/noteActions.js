import React from 'react'

export function addNotes(newNotes) {
    return{
        type:"ADD_NOTES",
        payload: newNotes
    }
}

export  function deleteNote(id) {
     
    return{
       type:"DELETE_NOTE",
       payload: id
    }
}

export  function updateNote(id,updatednote) {
    console.log("nau",updatednote)
     
    return{
       type:"UPDATE_NOTE",
       payload:{ id:id , updatednoteinfo:updatednote},
       
    }
}