import { FormEvent, useContext, useState } from "react";
import { UserDataContext } from "./UserDataProvider";

function DataForm(){
    const [ localName, setLocalname ] = useState("");
    const [ localAge, setLocalAge] = useState(0);
    const [ localAddress, setlocalAddress ] = useState("");
    const dataContext= useContext(UserDataContext);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const userData = {
            name: localName,
            age: localAge,
            address: localAddress
        }
        dataContext?.setUserData(userData);
    }

    return(
        <>

            <form onSubmit={handleSubmit}>
                <label htmlFor="nameInput">Name:</label>
                <label htmlFor="ageInput">Age:</label>
                <label htmlFor="addressInput">Address:</label>
                <input type="text" id="nameInput" autoComplete="off" onChange={(e) => setLocalname(e.target.value)} value={localName} required/>
                <input type="text" id="ageInput" autoComplete="off" onChange={(e) => setLocalAge(parseInt(e.target.value))} value={localAge} required/>
                <input type="text" id="addressInput" autoComplete="off" onChange={(e) => setlocalAddress(e.target.value)} value={localAddress} required/>
                <button type="submit">Submit</button>
                
            </form>
            <p>Local name is {localName}</p>
            <p>Local age is {localAge}</p>
            <p>Local address is {localAddress}</p>

        </>
    )

}

export default DataForm;
