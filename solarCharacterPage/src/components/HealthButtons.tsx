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
            </select>
        </form>
    </div>
  );
};

export default HealthButton;