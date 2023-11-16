import { FormEvent, useContext, useState } from "react";
import { NameContext } from "./NameProvider";

function NameForm(){
    const [localName, setLocalName] = useState("");
    const nameContext = useContext(NameContext);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        nameContext?.setName(localName)
        setLocalName("");
    }

  
    return(
        <>

            <form onSubmit={handleSubmit}>
                <label htmlFor="nameInput">Name:</label>
                <input type="text" id="nameInput" autoComplete="off" onChange={(e) => setLocalName(e.target.value)} value={localName} required/>
                <button type="submit">Submit</button>
                
            </form>
            <p>Local name is {localName}</p>
            <p>Global name is {nameContext?.name}.</p>
        </>
    )

}

export default NameForm;

