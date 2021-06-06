const initialstate = { notes:[]}
const notesReducer =(state=initialstate,action) =>{
        switch (action.type) {
            case "ADD_NOTES":
                console.log(action.payload)
                return { ...state, notes: [...state.notes, action.payload] };
            
            case "DELETE_NOTE":
                var id=action.payload;
                var newNotes = state.notes.filter((note) => note.id !==id);
                return {notes:newNotes}
            
            case "UPDATE_NOTE":
                var id=action.payload.id;
                var updatedinfo=action.payload.updatednoteinfo;
                var Notesafterupdate = state.notes.map((note) =>{
                    if (note.id===id) {
                      return updatedinfo
                    }
                    return note
                  })
                //   console.log("nau",Notesafterupdate);
                  return{notes:Notesafterupdate}
                
            
                  
            default:
                return state;
        }

}
export default notesReducer;