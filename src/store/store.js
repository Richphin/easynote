import { createStore ,applyMiddleware, compose } from 'redux'
import notesReducer from '../Reducers/notesReducer'
import { getFirebase,reduxReactFirebase } from "react-redux-firebase";
import { getFirestore,reduxFirestore } from "redux-firestore";
import firebase from "../firebase/config";
import thunk from 'redux-thunk';


 


 export const store = createStore(notesReducer ,compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
    reduxReactFirebase(firebase),
    reduxFirestore(firebase)
))