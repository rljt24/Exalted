import { useState } from "react";
import { HealthLevel } from "./Health";
import { damageTypes } from "./Health";

interface HealthProps {
  levelsOfHealth: HealthLevel[];
  updateLevelsOfHealth: (data: HealthLevel[]) => void;
}

function HealthButton({ levelsOfHealth, updateLevelsOfHealth }: HealthProps) {
  const [newData, setNewData] = useState(levelsOfHealth);
  const [damageType, setDamageType] = useState(damageTypes[1]);
  const [damageAmount, setDamageAmount] = useState(0);

  function handleType(dT: string) {
    setDamageType(dT);
  }

  function handleAmount(dA: number) {
    setDamageAmount(dA);
  }

  function handleDamage(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    dT: string,
    dA: number,
    newData: HealthLevel[]
  ) {
    e.preventDefault;
    let updatedData: HealthLevel[] = newData;
    for(let i=0; i < updatedData[0].damageTypePerLevel.length; i++){
      updatedData[0].damageTypePerLevel[i] = dT;
    }
    console.log(updatedData)
    setNewData(updatedData);
    console.log(newData);
    updateLevelsOfHealth(newData);
  }

  return (
    <div>
      <form>
        <label>Select a Damage Type</label>
        <select onChange={(e) => handleType(e.target.value)}>
          {damageTypes.map((td) => (
            <option value={td}>{td}</option>
          ))}
        </select>
        <br></br>
        <label>Amount of damage</label>
        <input
          type="number"
          value={damageAmount}
          onChange={(e) => handleAmount(parseInt(e.target.value))}
        ></input>
        <br></br>
        <button
          type="button"
          onClick={(e) => {
            handleDamage(e, damageType, damageAmount, newData);
          }}
        >
          Ouch
        </button>
      </form>
    </div>
  );
}

export default HealthButton;
