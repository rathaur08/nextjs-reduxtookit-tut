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
          {/* todolist */}
          <h1>Add Todo</h1>
          <input type='text' onChange={(e) => setTodo(e.target.value)} placeholder='Add todo' />
          {/* <button onClick={(() => dispatch(addTodos(todo)))} className='' type='button'>todo add</button> */}
          <button onClick={userDispatch} className='' type='button'>Add Todo</button>
          <br /><br />
          <Link href='/'>Home Page</Link>
          <br /><br />
          <hr />
          <h1>Todo List</h1>
          <hr />
          {
            todoData.map((item) => {
              return (
                <div key={item.id}>
                  <h1>
                    {item.name}
                    <button onClick={() => dispatch(removeUser(item.id))} className='' type='button'>Remove User</button>
                  </h1>
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