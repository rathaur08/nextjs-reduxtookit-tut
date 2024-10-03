'use client'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../page.module.css";
import { fetchApiUsers } from "../redux/slice";

const page = () => {
  const dispatch = useDispatch();
  const apiUserData = useSelector((data) => data.usersData.userAPIData);
  // console.log(apiUserData);

  useEffect(() => {
    dispatch(fetchApiUsers())
  }, [])

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h2>User list from API</h2>
        <hr />
        {/* <button class='btn btn-primary' onClick={() => dispatch(fetchApiUsers())}>Load Users</button> */}
        {
          apiUserData && apiUserData.map((item) => {
            return (
              <div key={item.id}>
                  <div className="d-flex justify-content-between mb-2">
                    <h6>{item.name}</h6>
                  </div>
                </div>
            );
          })
        }
      </main>
    </div>
  )
}

export default page