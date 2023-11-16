import { useContext } from "react";
import { NameContext } from "./NameProvider";

function NameShower(){
    const nameContext = useContext(NameContext);
    return <p>Global name from NameShower.tsx is {nameContext?.name}.</p>
}

export default NameShower;