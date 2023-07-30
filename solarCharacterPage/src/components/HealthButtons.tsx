import {useState} from "react";

type HealthLevel = {
    healthLevel: string,
    damageType: string[]
}
const typesOfDamage: string[] = ["Bashing", "Leathal", "Agrivated"];

function HealthButton({ levelsOfHealth }: { levelsOfHealth: HealthLevel[] }) {
    const [updateLevelsOfHealth, setUpdateLevelsOfHealth] = useState({levelsOfHealth})
  return (
    <div>
        <form>
            <label>Select a Damage Type</label>
            <select>
            {typesOfDamage.map((td) => (
               <option value={td}>{td}</option> 
            ))}
            </select><br></br>
            <label>Amount of damage</label>
            <input type="number"></input><br></br>
            <button type="submit">Enter</button>
        </form>
    </div>
  );
};

export default HealthButton;