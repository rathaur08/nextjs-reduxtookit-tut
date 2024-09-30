'use client';
import React, { useState } from 'react'
import { addUser } from '../redux/slice';
import { useDispatch } from 'react-redux';
import Link from 'next/link';

const AddUser = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const userDispatch = () => {
    // console.log(name);
    dispatch(addUser(name));
  }

  return (
    <div>
      <h3>AddUser</h3>
      <input type='text' onChange={(e) => setName(e.target.value)} placeholder='Add user name' />
      <button onClick={userDispatch} className='' type='button'>Add User</button>
      <br /> <br /> <br />
      <Link href='/removeuser'>Remove User Page</Link>
      <br /> <br />
      <Link href='/todolist'>Todo Page</Link>
      <br /> <br />
      <Link href='/apiusers'>User API Page</Link>
      
      
    </div>
  )
}

export default AddUser