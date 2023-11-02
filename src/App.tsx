import { useState } from "react";
import "./App.css";
import ButtonGroup from "./ButtonGroup";
import { Routes, Route } from 'react-router-dom';
import Newspage from "./Pages/NewsPage";
import Homepage from "./Pages/HomePage";
import Notfound from "./Pages/NotFoundPage";
import { INDEX_PATH, NEWS_PATH, NOT_FOUND_PATH } from "./Constants/paths";
function App() {
  const [headerText, setHeaderText] = useState("Hola!");
  const heading = "my colour buttons";
  const buttonName = ["Red", "Green", "Blue", "Pink"];

  const handleButtonClick = (newHeaderText: string) =>
    setHeaderText(newHeaderText);


  return (
    <>
      {/*}<h1>{headerText}</h1>
      <ButtonGroup
        heading={heading}
        buttonName={buttonName}
        onButtonClick={handleButtonClick}
  /> */}

      <Routes>
        <Route path={INDEX_PATH} element={<Homepage />} />
        <Route path={NEWS_PATH} element={<Newspage />} />
        <Route path={NOT_FOUND_PATH} element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
