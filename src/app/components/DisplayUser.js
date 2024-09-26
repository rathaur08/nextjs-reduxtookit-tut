'use client'
import { useSelector } from "react-redux"

const DisplayUser = () => {
  const userData = useSelector((data) => data.users)
  console.log(userData)
  return (
    <div>
      <h3>Display User List</h3>
      <hr />
      {
        userData.map((item) => {
          return (
            <div key={item.id}>
              <h1>{item.name}</h1>
            </div>
          );
        })
      }
    </div>
  )
}

export default DisplayUser