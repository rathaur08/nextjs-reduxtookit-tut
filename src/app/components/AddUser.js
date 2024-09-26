'use client';
import React, { useState } from 'react'
import { addUser } from '../redux/slice';
import { useDispatch } from 'react-redux';

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
      <input type='text' onChange={(e) => setName(e.target.value)} placeholder='Add' />
      <button onClick={userDispatch} className='' type='button'>Add User</button>
    </div>
  )
}

export default AddUser