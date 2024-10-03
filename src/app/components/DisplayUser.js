'use client'
import { useSelector } from "react-redux"
import { useDispatch } from 'react-redux';
import { removeUser } from "../redux/slice";

const DisplayUser = () => {
  const userData = useSelector((data) => data.usersData.users)
  // console.log(userData)
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
              <div className="d-flex justify-content-between mb-2">
                <h6>{item.name}</h6>
                <button className='btn btn-danger ms-3' onClick={() => dispatch(removeUser(item.id))} type='button'>X</button>
              </div>
            </div>
          );
        })
      }
    </div>
  )
}

export default DisplayUser