'use client'
import { useDispatch, useSelector } from "react-redux";
import styles from "../page.module.css";
import { fetchApiUsers } from "../redux/slice";

const page = () => {
  const dispatch = useDispatch();
  const apiUserData = useSelector((data) => data.usersData.userAPIData);
  console.log(apiUserData);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* apiusers */}
        <h2>User list from API</h2>
        <button onClick={() => dispatch(fetchApiUsers())}>Load Users</button>
        {
          apiUserData && apiUserData.map((item) => {
            return (
              <div key={item.id}>
                <h1>
                  {item.name}
                </h1>
              </div>
            );
          })
        }
      </main>
    </div>
  )
}

export default page