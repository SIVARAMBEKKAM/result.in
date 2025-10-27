import React from 'react'


export default function Teacherlogin() {
  return (
    <div>
      <h2>Teacher login</h2><br></br>
      <div className="input">
        <div className='arrange'>
      <label class="my-label">UserName</label><br></br>
      <input type="text" placeholder='Enter UserName' class="my-input"></input></div>
     
     <div className='arrange'> <label className='my-label'>Password</label><br></br>
      <input type='text' placeholder='Enter Password' class="my-input"></input></div></div>
     <div class="buttondiv"> <button>Login</button></div>
    </div>
  )
}
