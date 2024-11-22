import React from 'react' //eslint-disable-line
import { useAuthContext } from "../context/auth-context";
import { toast } from 'react-toastify';
import axios from 'axios';
const Dashboard = () => {

  const { userData } = useAuthContext();
  const baseUrl = import.meta.env.VITE_BASEURL

  
  axios.defaults.withCredentials = true;
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${baseUrl}/auth/logout`,
        {
        withCredentials:true
        }
    )

    if (response?.data.success) {
      toast.success(response?.data?.message);
      window.location.assign("/login");
    }
      
    } catch (error) { 
      if (error instanceof axios.AxiosError) {
        console.log('');
      } if(error === 404 || error) {
        const errorMessage =  error.message 
        toast.error(errorMessage)  
      }
    }
    
  }


  return (
    <div>

{userData && (
        <div>
          <h1>Welcome {userData?.username}</h1>

          {userData.status === "blocked" ? (
  <span>Error Occurred. Please Contact Admin</span>
) : (
  <span></span>
)}
         

         <div>
          <button onClick={handleLogout}>
            Log Out
          </button>
         </div>

        </div>
      )}

    </div>
  )
}

export default Dashboard