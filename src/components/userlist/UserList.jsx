import React, {useState} from 'react'
// style 
import './UserList.css'

function UserList({users, setUsers}) {
  const [idx, setIdx] = useState(0)
const handleDelete = idx => {
  const deleted = users.filter(item => item.id !== idx)
  setUsers(deleted)
}

  return (
    <div className='userList'>
      <div className="userList-container container">
        {
          users.map((user) => {
            return(
              <div className='card' key={user.id}>
                  <div className="card-inner">
                    <img src={user.imageUrl} alt={user.name} height={150} width={150} />
                    <h3>{user.firstName} {user.lastName}, age {user.age}</h3>
                    <p>From: {user.from}</p>
                    <p>Job:{user.job} </p>
                    <p>Gender: {user.gender}</p>
                    <button onClick={() => handleDelete(user.id)}>Delete</button>
                  </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default UserList
