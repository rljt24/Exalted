import { useState } from "react";

type HealthLevel = {
  healthLevel: string;
  damageType: string[];
};
const typesOfDamage: string[] = ["Bashing", "Leathal", "Agrivated"];

function HealthButton({ levelsOfHealth }: { levelsOfHealth: HealthLevel[] }) {
  const [updateLevelsOfHealth, setUpdateLevelsOfHealth] = useState(levelsOfHealth);
  const [damageType, setDamageType] = useState(typesOfDamage[0]);
  const [damageAmount, setDamageAmount] = useState(0);

  const handleNumber = (event) => {
    setDamageAmount(event.target.value);
  }

  const handleType = (event) => {
    setDamageType(event.target.value);
  }

  const handleDamage = (dT: string, dA: number) => {
      let levelsOfHealthUpdate: HealthLevel[] = [];
      let count: number = 0;
      let intialIndex: number = 0;
      let numOfLoops: number = 0;
      for (let i = 0; i < updateLevelsOfHealth.length; i++) {
        let part: HealthLevel = {
          healthLevel: "0",
          damageType: [],
        };
        part.healthLevel = updateLevelsOfHealth[i].healthLevel;
        for (let j = 0; j < updateLevelsOfHealth[i].damageType.length; j++) {
            part.damageType.push(updateLevelsOfHealth[i].damageType[j]);
        }
        levelsOfHealthUpdate.push(part);
      }
      let damageArray: string[] = [];
      for(let k=0; k < levelsOfHealthUpdate.length; k++){
        damageArray.concat(levelsOfHealth[k].damageType);
      }
      console.log(levelsOfHealthUpdate);
      if(dT === typesOfDamage[0]){
        outerloop: while(count < dA){
            innerloop: for(let x=0; x < damageArray.length; x++){
                if(damageArray[x] === 'none' && numOfLoops === 0){
                    damageArray[x] = typesOfDamage[0];
                    count++;
                    if(x === damageArray.length - 2){
                        x = 0;
                        numOfLoops++;
                    }
                }
                if(damageArray[x] === typesOfDamage[0] && numOfLoops === 1){
                    damageArray[x] = typesOfDamage[1];
                    count++;
                    if()
                }
            }
        }
      }
      
    //   setUpdateLevelsOfHealth(levelsOfHealthUpdate);
    //   console.log(updateLevelsOfHealth);
  };

  return (
    <div>
      <form>
        <label>Select a Damage Type</label>
        <select onChange={handleType}>
          {typesOfDamage.map((td) => (
            <option value={td}>{td}</option>
          ))}
        </select>
        <br></br>
        <label>Amount of damage</label>
        <input
          type="number"
          value={damageAmount}
          onChange={handleNumber}
          
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
