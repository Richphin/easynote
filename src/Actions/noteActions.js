import React from 'react'

export  function getAllNotes() {
    return(dispatch,state,{getFirestore})=>{
       const db = getFirestore();
       db.collection('notes')
       .get()
       .then((results)=>{
           let notes =[];
           results.forEach((doc)=>{
               notes.push(doc.data());
           });
           dispatch({
               type: 'ADD_ALL_NOTES',
               payload: notes,
             });
       })
       .catch((err) => {
           console.log(err);
         });
    };
   
}

export function addNotes(newNotes) {
    return(dispatch,state,{getFirestore})=>{
        const db = getFirestore();
        db.collection('notes')
        .add(newNotes)
        .then(()=>{
            dispatch(
                {
                    type: "ADD_NOTES",
                    payload: newNotes,
                }
            );
        })
        .catch((err) => {
            console.log(err);
          });

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