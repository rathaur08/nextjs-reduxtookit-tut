'use client';
import styles from "../page.module.css";
import React, { useState } from 'react'
import { addTodos } from '../redux/todoSlice';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';

const TodoList = () => {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();
  const userDispatch = () => {
    // console.log(todo);
    dispatch(addTodos(todo));
  }

  // GetData ReduxToolkit
  const todoData = useSelector((data) => data.todosData.todos)
  // console.log(todoData);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div>
          <h3>Add Todo</h3>
          <form class="row g-3">
            <div class="col-auto">
              <input type='text' class="form-control" onChange={(e) => setTodo(e.target.value)} placeholder='Add todo list' />
            </div>
            <div class="col-auto">
              <button onClick={(() => dispatch(addTodos(todo)))} className='btn btn-primary mb-3' type='button'>todo add</button>
              {/* <button onClick={userDispatch} className='btn btn-primary mb-3' type='button'>Add Todo</button> */}
            </div>
          </form>
          <hr />
          <div class="row g-3">
            <div class="col-auto">
              <h5>Other Page Links : </h5>
            </div>
            <div class="col-auto">
              <Link className='btn btn-link' href='/'>Home Page</Link>
            </div>
            <div class="col-auto">
              <Link className='btn btn-link' href='/removeuser'>Remove User Page</Link>
            </div>
            <div class="col-auto">
              <Link className='btn btn-link' href='/apiusers'>User API Page</Link>
            </div>
          </div>
          <hr />
          <h1>Todo List</h1>
          <hr />
          {
            todoData.map((item) => {
              return (
                <div key={item.id}>
                  <div className="d-flex justify-content-between mb-2">
                    <h6>{item.name}</h6>
                    <button className='btn btn-danger ms-3' onClick={() => dispatch(removeUser(item.id))} type='button'>X</button>
                  </div>
                </div>
              );
            })
          }
        </div>
      </main>
    </div>
  )
}

export default TodoList