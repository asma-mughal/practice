import { createContext, useContext, useState } from "react";
export const UserContext = createContext(undefined);
export const UserProvider= ({children}) =>{
    const user = useState({
        name :"John",
        email : "John@gmail.com",
        dob: "01/01/2000"
    })
return (
    <UserContext.Provider value={user}>
  {children}
    </UserContext.Provider>
)
}
export const useUser = () => useContext(UserContext)