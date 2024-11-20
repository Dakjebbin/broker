import React from 'react'
import { useAuthContext } from "../context/auth-context";
const Dashboard = () => {

  const { userData } = useAuthContext();
  return (
    <div>

{userData && (
        <div>
          <h1>Welcome {userData?.username}</h1>
         
        </div>
      )}

    </div>
  )
}

export default Dashboard