import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../Actions/authActions'
import Noteform from '../Components/Noteform'
import Notelist from '../Components/Notelist'




function Dashboard(props) {
  function handleLogout(){
    props.logout()
}
    return (
      <div className="container">
            <div className="col-md-4 formcontainer">
              <Noteform/>
            </div>
            <div className="col-md-8 notecontainer">
            <button type="button" 
                    name="Submit" 
                    onClick={handleLogout}
                    style={{backgroundColor:"tomato" , color:"white", float:"right"}}
                    >Logout</button>
              
                <h1 className="head2 text-center"><strong>Notes</strong></h1>
                
                <Notelist/>
              
            </div>
      </div>
    )
}

export default  connect(null,{logout})(Dashboard)
