import axios from "axios";
import { FormEvent, useState } from "react"

function Carsapi(){
    const [make, setMake] = useState("");

    const [model, setModel] = useState("");

    const [limit, setLimit] = useState("");

    const handleClick = async (e: FormEvent) => {
        e.preventDefault();

    const casrsApiParams = {
        make: make,
        model: model,
        limit: limit
    }

    try{
        const response = await axios.get("https://api.api-ninjas.com/v1/cars",{
            params: casrsApiParams,
            headers: {
                'X-Api-Key': "NuXvBrGqimcyqTyiMA+c2A==YVRQrCWLVyK7jYui"
            }
        })
        return(
            console.log(response.data)
        )
        
        } catch (Error) {};
    }
    return (
        <form onSubmit={handleClick}>
            <label>Enter the Name of the car! </label>
            <input type="text"  id="make" autoComplete="off" onChange={e => setMake(e.target.value)} value={make}/>
            <label>Enter the Model of the car! </label>
            <input type="text"  id="model" autoComplete="off" onChange={e => setModel(e.target.value)} value={model}/>
            <label>Enter how to be displayed! </label>
            <input type="text"  id="limit" autoComplete="off" onChange={e => setLimit(e.target.value)} value={limit}/>
            <button>Submit</button>
        </form>
        
    )
}

export default Carsapi;