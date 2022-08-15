import Button from 'Components/Button/Button';
import React, { useState } from 'react';

const Greeter = () => {
  const [name, setName] = useState({ value: "", wasCleared: false });
  const [showGreeting, setShowGreeting] = useState(false);

  const handleTextDisplay = () =>
    name.value !== "" && name.wasCleared === false
      ? setShowGreeting(!showGreeting)
      : name.value === "" && name.wasCleared === true && showGreeting
        ? (setShowGreeting(!showGreeting), (name.wasCleared = false))
        : null;

  return (<>
      <input
        style={{ display: "block" }}
        placeholder="What's your name?"
        onKeyUp={(e) => { setName({
          value: e.target.value,
          wasCleared: e.target.value === "" && e.key === "Backspace"
        }) }}
      />
     
      <Button
        color={showGreeting ? (name.value.length > 0 ? `red` : `green` ) : `blue`}
        text={showGreeting ? `Hide` : `Show`}
        parentCallback={ handleTextDisplay }
      />

      <label style={{ display: "block" }}>
        {showGreeting ? `Hi ${name.value}` : ``}
      </label>
    </>
  )
};

export default Greeter;