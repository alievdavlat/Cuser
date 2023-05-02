import React from 'react';
import { useState } from 'react';
// style 
import './App.css';
// Components 
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer';
import UserList from './components/userlist/UserList';
import NewUserForm from './components/newuser/NewUserForm';

function App() {
const [users, setUsers] = useState([])
const [showModal, setShowModal] = useState(false)

const closeModal = e => {
if(e.key === "Escape") setShowModal(false)
}


  return (
    <div className="App" onKeyDown={closeModal}>
      <Navbar userslength={users.length} />
      <main>
        <div className="no-users">
         {users.length === 0 &&  <h2>No Users</h2>}
        </div>
        <UserList users={users}  setUsers={setUsers} />
      </main>
      {  
        showModal &&   <NewUserForm showModal={showModal} setShowModal={setShowModal}  setUsers={setUsers} />
      }     
      <button className='create-user' onClick={() => setShowModal(prev => !prev)} >create User</button>
      <Footer/>
    </div>
  );
}

export default App;


