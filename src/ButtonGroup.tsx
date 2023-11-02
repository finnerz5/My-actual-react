import { useState } from "react";

interface ButtonGroupProps {
  heading: string;
  buttonName: string[];
  onButtonClick: (buttonName: string) => void;
}

function ButtonGroup({ heading, buttonName, onButtonClick }: ButtonGroupProps) {
  const [buttonText, setButtonText] = useState(
    "no button has been pressed yet"
  );
  const [counter, setCounter] = useState(0);

  const handleClick = (buttonName: string) => {
    setButtonText(buttonName + " was pressed");
    setCounter(counter + 1);
    onButtonClick(buttonName);
  };

  const buttonTags = buttonName.map((buttonName) => (
    <button
      type="button"
      key={buttonName}
      onClick={() => handleClick(buttonName)}
    >
      {buttonName}
    </button>
  ));

  return (
    <>
      <h2>{heading}</h2>
      {buttonTags}
      <p>{buttonText}</p>
      {counter}
    </>
  );
}

export default ButtonGroup;
