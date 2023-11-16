import { ReactNode, createContext, useState } from "react";

interface UserDataType{
    name:string,
    age: number,
    address: string;
}

interface UserDataContextType {
    userData: UserDataType,
    setUserData: (userData: UserDataType) => void;
}

export const UserDataContext = createContext<UserDataContextType | null>(null);

function UserDataProvider({ children} : {children: ReactNode}){
    const [ userData, setUserData] = useState({name:"", age: 0, address:""});

    return (
        <UserDataContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserDataContext.Provider>
    )
  
}

export default UserDataProvider;