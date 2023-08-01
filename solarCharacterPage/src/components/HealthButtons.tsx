import { useState } from "react";

type HealthLevel = {
  healthLevel: string;
  damageType: string[];
};
const typesOfDamage: string[] = ["Bashing", "Leathal", "Agrivated"];

function HealthButton({ levelsOfHealth }: { levelsOfHealth: HealthLevel[] }) {
  const [updateLevelsOfHealth, setUpdateLevelsOfHealth] = useState({
    levelsOfHealth,
  });
  const [damageType, setDamageType] = useState(typesOfDamage[0]);
  const [damageAmount, setDamageAmount] = useState(0);

  const handleDamage = (this2: string, that: number) => {
    console.log(this2 + " & " + that);
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
