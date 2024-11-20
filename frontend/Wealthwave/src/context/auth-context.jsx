import axios from "axios";
import {  createContext, useContext, useEffect } from "react";

export const AuthContext = createContext();

export const useAuthContext = () => {
    return useContext(AuthContext);
};

const baseUrl = import.meta.env.VITE_BASEURL

export const AuthContextProvider = ({children}) => {


    return <AuthContext.Provider>{children}</AuthContext.Provider>
};