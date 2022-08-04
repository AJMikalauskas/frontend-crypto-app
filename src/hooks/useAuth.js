import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

// Allows for us to not have to dd these imports and use in this way, instead can just use useAuth()
    // in files such as Login.js
const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;