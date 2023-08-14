import { castes } from "./Abilities";
import { useState } from "react";
import Abilities from "./Abilities";
import Attributes from "./Attributes";
import EssanceAndWillpower from "./EssanceAndWillpower";
import Health from "./Health";

function BasicInfo() {
  const [chosenCaste, setChosenCaste] = useState("");

  function handleCaste(caste: string) {
    setChosenCaste(caste);
  }

  return (
    <>
      <form>
        <label>Character Name</label>
        <input></input>
        <br></br>
        <label>Caste</label>
        <select onChange={(e) => handleCaste(e.target.value)}>
          {castes.map((cast) => (
            <option value={cast}>{cast}</option>
          ))}
        </select>
        <br></br>
        <label>Experience</label>
        <input></input>
      </form>
      <EssanceAndWillpower />
      <div className="line-container">
        <div className="line"></div>
        <h1 className="title">Attributes</h1>
      </div>
      <br></br>
      <Attributes />
      <br></br>
      <div className="line-container">
        <div className="line"></div>
        <h1 className="title">Abilities</h1>
      </div>
      <br></br>
      <Abilities chosenCaste={chosenCaste} />
      <h1>Health</h1>
      <Health />
    </>
  );
}

export default BasicInfo;
