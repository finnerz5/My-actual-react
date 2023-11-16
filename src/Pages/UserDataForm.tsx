import { useContext, useState } from "react";
import { UserDataContext } from "./UserDataProvider";

function dataForm(){
    const [ localData, setLocalData ] = useState("");
    const dataContext= useContext(UserDataContext);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        dataContext?.setUserData(localData);
        setLocalData("");
    }


}
