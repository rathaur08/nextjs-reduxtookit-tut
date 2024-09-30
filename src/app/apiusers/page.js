'use client'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../page.module.css";
import { fetchApiUsers } from "../redux/slice";

const page = () => {
  const dispatch = useDispatch();
  const apiUserData = useSelector((data) => data.usersData.userAPIData);
  console.log(apiUserData);

  useEffect(() => {
    dispatch(fetchApiUsers())
  }, [])

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* apiusers */}
        <h2>User list from API</h2>
        <hr />
        {/* <button onClick={() => dispatch(fetchApiUsers())}>Load Users</button> */}
        {
          apiUserData && apiUserData.map((item) => {
            return (
              <div key={item.id}>
                <p>
                  {item.name}
                </p>
              </div>
            );
          })
        }
      </main>
    </div>
  )
}

export default page