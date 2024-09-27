'use client'
import { useSelector } from "react-redux"
import { useDispatch } from 'react-redux';
import { removeUser } from "../redux/slice";

const DisplayUser = () => {
  const userData = useSelector((data) => data.usersData.users)
  console.log(userData)
  const dispatch = useDispatch();
  // const removeUserDispatch = () => {
  //   console.log("remove User Dispatch");
    // dispatch(removeUser());
  // }

  return (
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
  )
}

export default DisplayUser