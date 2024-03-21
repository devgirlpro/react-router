import React from 'react';
import { Link }  from 'react-router-dom';

let users = [
    {
        id: 542,
        name: 'Caleb'
    },
    {
        id: 49,
        name: 'Claire'
    },
    {
        id: 374,
        name: 'Calvin'
    },
]

const Users = () => {
  return (
    <>
    <h2>Welcome to  Users page</h2>
    {users.map((user) => {
       return (
        <>
        <Link to={'/users/' + user.id} key={user.id}>{user.id}: {user.name}</Link> 
       <hr />
       </>
       ) 
    })}
    </>
  )
}

export default Users