// import axios from "axios";
// import { createContext, useContext, useEffect, useState } from "react";


// export const authContext = createContext()

// export const useAuthContext = () => {
//     return useContext(authContext)
// }

// export const AuthContextProvider = ({ children }) => {
//    const [userData, setUserData] = useState(null)
//    const baseUrl = import.meta.env.VITE_BASEURL;

   

//    useEffect(() => {
//     const validResponse = async () => {

//         try {
//             const response = await axios.get(`${baseUrl}/auth/validate`, {
//                 withCredentials: true
//             })

//             console.log(response);
            

//             if (!response?.data || !response?.data?.success) {
//                 console.log("session ended");
//                 return;
//               }

//             if (response?.data?.success) {
//                 console.log(response?.data?.success);
                
//                     setUserData(response?.data?.user)
//             }
//         } catch (error) {
//             if (error instanceof axios.AxiosError) {
//                 console.log("No session => ", error?.response?.data);
//               } else {
//                 console.log("Session error => ", error);
//               }
//         }
//     }

//     validResponse()
  
//     },[])
   
   
//     return (
//         <authContext.Provider value={{ userData, setUserData }}>
//           {children}
//         </authContext.Provider>
//       );
// }