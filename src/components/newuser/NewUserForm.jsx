import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './NewUserForm.css'
import { Male } from '@mui/icons-material'

function NewUserForm({showModal, setShowModal, setUsers}) {
  const [user, setUserr] = useState(
    {
  id:uuidv4(), 
  imageUrl: "",
  firstName: '',
  lastName:'',
  age: null,
  from:'',
  job:'',
  gender:'',
},

  )
  const closeModal = (e) => {
    if (e.target.className === "overlay") {
      setShowModal(prev => !prev)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setUsers(prev => [...prev, user])
    setShowModal(prev => !prev)
  }
  
  return (
    <div className='modal-wrapper'>
      <div className="overlay" onClick={closeModal}>
        <div className="modal">
          <h2>Create New User</h2>
          <form onSubmit={handleSubmit}>
            <label>
              <span>Image url:</span>
              <input type="url"  name='image' required onChange={ e => setUserr(prev => {
                return {...prev, imageUrl: e.target.value}
              })}  />
            </label>
            <label>
              <span>First Name:</span>
              <input type="text" name='FirstName'  required  onChange={ e => setUserr(prev => {
                return {...prev, firstName: e.target.value}
              })}  />
            </label>
            <label>
              <span>Last Name:</span>
              <input type="text" name='LastName'  required  onChange={ e => setUserr(prev => {
                return {...prev, lastName: e.target.value}
              })} />
            </label>
            <label>
              <span>Age:</span>
              <input type="number" name='Age'  required onChange={ e => setUserr(prev => {
                return {...prev, age: e.target.value}
              })} />
            </label>
            <label>
              <span>From:</span>
              <input type="text" name='From'  required onChange={ e => setUserr(prev => {
                return {...prev, from : e.target.value}
              })} />
            </label>
            <label>
              <span>Job:</span>
              <input type="text" name='Job'  required  onChange={ e => setUserr(prev => {
                return {...prev,  job: e.target.value}
              })} />
            </label>
            <div className='gender'>
                <span>Gender:</span>
                <label>
                  <small>Male</small>
                  <input type="radio" name='gender' value='Male' onChange={ e => setUserr(prev => {
                return {...prev,  gender: e.target.value}
              })}  required/>
                </label>
                <label>
                  <small>Female</small>
                  <input type="radio" name='gender'  value='Female' onChange={ e => setUserr(prev => {
                return {...prev,  gender: e.target.value}
              })} required/>
                </label>
            </div>
            <button className='modal-btn' >Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewUserForm
