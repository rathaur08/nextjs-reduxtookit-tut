'use client'
import Link from "next/link";
import styles from "../page.module.css";
import { useSelector } from "react-redux"
import { useDispatch } from 'react-redux';
import { removeUser } from "../redux/slice";


const RemoveUser = () => {
  const userData = useSelector((data) => data.users)
  // console.log(userData)
  const dispatch = useDispatch();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div>
          <h2>Remove User Page</h2>
          <div>
            <h3>Display User List</h3>
            <hr />
            {
              userData.map((item) => {
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
        </div>
        <Link href='/'>Home Page</Link>
      </main>
    </div>
  )
}
export default RemoveUser