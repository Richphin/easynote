import React from 'react'

import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom'

function ProtectedRoute({component:Component,auth,...otherprops}) {
    console.log(auth);
    return (
        <Route
        {...otherprops}
        render ={ (props) => {
            if (auth.isLoaded === false) {
                return<h1>Loading...</h1>;
            } 
            else if (auth.isLoaded === true && auth.isEmpty === false) {
                return <Component {...props}/>
            } 
            else {
              return <Redirect to="login"/> 
            }
        }}
       
        />
    )
}
const mapStateToProps=(state)=> {
    return {
        auth: state.firebaseState.auth,
    }
}

export default connect(mapStateToProps, {}) (ProtectedRoute)
