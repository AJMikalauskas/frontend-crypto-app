import { createContext, useState } from "react";

const AuthContext = createContext({}); 

// Difference in context and its provider; export both though.
export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});

    return (
        // Value expects an object, uses ES6 same name property as value here.
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;