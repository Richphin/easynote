import { createStore } from 'redux'
import notesReducer from '../Reducers/notesReducer'


 


 export const store = createStore(notesReducer)