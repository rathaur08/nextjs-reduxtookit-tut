'use client'
import Link from "next/link";
import styles from "../page.module.css";
import { useSelector } from "react-redux"
import { useDispatch } from 'react-redux';
import { removeUser } from "../redux/slice";


const RemoveUser = () => {
  const userData = useSelector((data) => data.usersData.users)
  // console.log(userData)
  const dispatch = useDispatch();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div>
          <h3>Remove User Page</h3>
          <div>
            <h5>Display User List</h5>
            <hr />
            {
              userData.map((item) => {
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
          <Link href='/'>GO Home Page</Link>
        </div>
      </main>
    </div>
  )
}
export default RemoveUser