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
      <h3>Add User</h3>
      <form class="row g-3">
        <div class="col-auto">
          <input type='text' class="form-control" onChange={(e) => setName(e.target.value)} placeholder='Add User Name' />
        </div>
        <div class="col-auto">
          <button onClick={userDispatch} className='btn btn-primary mb-3' type='button'>Add User</button>
        </div>
      </form>
      <hr />
      <div class="row g-3">
        <div class="col-auto">
          <h5>Other Page Links : </h5>
        </div>
        <div class="col-auto">
          <Link className='btn btn-link' href='/removeuser'>Remove User Page</Link>
        </div>
        <div class="col-auto">
          <Link className='btn btn-link' href='/todolist'>Todo Page</Link>
        </div>
        <div class="col-auto">
          <Link className='btn btn-link' href='/apiusers'>User API Page</Link>
        </div>
      </div>
    </div>
  )
}

export default AddUser