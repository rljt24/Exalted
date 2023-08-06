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
    let count: number = 0;
    if (dT === damageTypes[1]) {
      if(count < dA) {
        outerloop:for (let i = 0; i < updatedData.length; i++) {
          for (let j = 0; j < updatedData[i].damageTypePerLevel.length; j++) {
            if (updatedData[i].damageTypePerLevel[j] === damageTypes[0]) {
              updatedData[i].damageTypePerLevel[j] = dT;
              count++;
              if (count === dA) {
                break outerloop;
              }
              if (updatedData[i].healthLevel === "-4") {
                break outerloop;
              }
            }
          }
        }
      }
      if(count < dA) {
        outerloop2:for (let k = 0; k < updatedData.length; k++) {
          for (let x = 0; x < updatedData[k].damageTypePerLevel.length; x++) {
            if (
              updatedData[k].damageTypePerLevel[x] === damageTypes[0] ||
              updatedData[k].damageTypePerLevel[x] == damageTypes[1]
            ) {
              updatedData[k].damageTypePerLevel[x] = damageTypes[2];
              count++;
              if (count === dA) {
                break outerloop2;
              }
              if (updatedData[k].healthLevel === "-4") {
                break outerloop2;
              }
            }
          }
        }
      }
      if(count < dA) {
        if (dA - count === 1) {
          updatedData[4].damageTypePerLevel[0] = damageTypes[1];
        }
        if (dA - count >= 2) {
          updatedData[4].damageTypePerLevel[0] = damageTypes[2];
        }
      }
    } else if(dT === damageTypes[2]){
      outerloop3:for(let y=0; y<updatedData.length; y++){
        for(let z=0; z<updatedData[y].damageTypePerLevel.length; z++){
          if (
            updatedData[y].damageTypePerLevel[z] === damageTypes[0] ||
            updatedData[y].damageTypePerLevel[z] == damageTypes[1]
          ) {
            updatedData[y].damageTypePerLevel[z] = damageTypes[2];
            count++;
            if (count === dA) {
              break outerloop3;
            }
          }
        }
      }
    } else if(dT === damageTypes[3]){
      outerloop4:for(let a=0; a<updatedData.length; a++){
        for(let b=0; b<updatedData[a].damageTypePerLevel.length; b++){
          if (
            updatedData[a].damageTypePerLevel[b] !== damageTypes[3]
          ) {
            updatedData[a].damageTypePerLevel[b] = damageTypes[3];
            count++;
            if (count === dA) {
              break outerloop4;
            }
          }
        }
      }
    }

    setNewData(updatedData);
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
