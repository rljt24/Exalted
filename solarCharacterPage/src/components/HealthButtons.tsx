import { useState } from "react";

type HealthLevel = {
  healthLevel: string;
  damageType: string[];
};
const typesOfDamage: string[] = ["Bashing", "Leathal", "Agrivated"];

function HealthButton({ levelsOfHealth }: { levelsOfHealth: HealthLevel[] }) {
  const [updateLevelsOfHealth, setUpdateLevelsOfHealth] =
    useState(levelsOfHealth);
  const [damageType, setDamageType] = useState(typesOfDamage[0]);
  const [damageAmount, setDamageAmount] = useState(0);

  const handleDamage = (dT: string, dA: number) => {
    setUpdateLevelsOfHealth(() => {
      let levelsOfHealthUpdate: HealthLevel[] = [];
      let count: number = 0;
      for (let i = 0; i < updateLevelsOfHealth.length; i++) {
        let part: HealthLevel = {
          healthLevel: "0",
          damageType: [],
        };
        part.healthLevel = updateLevelsOfHealth[i].healthLevel;
        for (let j = 0; j < updateLevelsOfHealth[i].damageType.length; j++) {
          if (dT === typesOfDamage[0]) {
            if (
              updateLevelsOfHealth[i].damageType[j] === "none" &&
              count <= dA
            ) {
              part.damageType.push(dT);
              count++;
            } else {
              part.damageType.push(updateLevelsOfHealth[i].damageType[j]);
            }
          } else if (dT === typesOfDamage[1]) {
            if (
              (updateLevelsOfHealth[i].damageType[j] === "none" ||
                updateLevelsOfHealth[i].damageType[j] === "Bashing") &&
              count <= dA
            ) {
              part.damageType.push(dT);
              count++;
            } else {
              part.damageType.push(updateLevelsOfHealth[i].damageType[j]);
            }
          } else {
            if (
              updateLevelsOfHealth[i].damageType[j] !== typesOfDamage[2] &&
              count <= dA
            ) {
              part.damageType.push(dT);
              count++;
            } else {
              part.damageType.push(updateLevelsOfHealth[i].damageType[j]);
            }
          }
        }
        levelsOfHealthUpdate.push(part);
        // for(let j=0; j < updateLevelsOfHealth[i].healthLevel.length; j++){
        //     if(dT === typesOfDamage[0]){
        //         if(updateLevelsOfHealth[i].healthLevel[j] === 'none'){
        //             levelsOfHealthUpdate.push({
        //                 healthLevel: {updateLevelsOfHealth[i].healthLevel},
        //             })
        //             count++;
        //             if(count === dA){
        //                 break;
        //             }
        //         }
        //     } else if(dT === typesOfDamage[1]){

        //     } else {

        //     }
        // }
      }
      console.log(dT + " & " + dA);
    });
  };

  return (
    <div>
      <form>
        <label>Select a Damage Type</label>
        <select onChange={(e) => setDamageType(e.target.value)}>
          {typesOfDamage.map((td) => (
            <option value={td}>{td}</option>
          ))}
        </select>
        <br></br>
        <label>Amount of damage</label>
        <input
          type="number"
          value={damageAmount}
          onChange={(e) => setDamageAmount(parseInt(e.target.value))}
        ></input>
        <br></br>
        <button
          type="button"
          onClick={() => {
            handleDamage(damageType, damageAmount);
          }}
        >
          Ouch
        </button>
      </form>
    </div>
  );
}

export default HealthButton;
