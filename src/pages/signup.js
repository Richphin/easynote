import React, { useState } from 'react'
import { connect } from 'react-redux'
import { signup } from '../Actions/authActions'



function Signup(props) {
    const [credentials, setcredentials] = useState({email:"",password:""})
    function handleOnchange(event){
        setcredentials({
            ...credentials,
            [event.target.name]: event.target.value,
        })
    }
    function handleOnsubmit(){
        props.signup(credentials.email,credentials.password)
    }
    return (
        <div>
           <form>
               <div>
                   <label>Email</label>
                   <input type="email" name="email" value={credentials.email}  onChange={handleOnchange}/>
               </div>
               <div>
                   <label>Password</label>
                   <input type="password" name="password" value={credentials.password}  onChange={handleOnchange}/>
               </div>
               <button type="button" name="Submit" onClick={handleOnsubmit}>Signup</button>
         </form> 
        </div>
    )
}

export default connect(null, {signup})(Signup)
