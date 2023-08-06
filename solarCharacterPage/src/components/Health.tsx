import "../cssFiles/Health.css";
import React, { useState } from "react";
import HealthButton from "./HealthButtons";

export interface HealthLevel {
    healthLevel: string;
    damageTypePerLevel: string[];
  };

export const damageTypes: string[] = ['None', 'Bashing', 'Lethal', 'Aggravated'];

function Health() {
    
  const [levelsOfHealth, setLevelsOfHealth] = useState([
    {
      healthLevel: "0",
      damageTypePerLevel: [damageTypes[0], damageTypes[0]],
    },
    {
      healthLevel: "-1",
      damageTypePerLevel: [damageTypes[0], damageTypes[0]],
    },
    {
      healthLevel: "-2",
      damageTypePerLevel: [damageTypes[0], damageTypes[0]],
    },
    {
      healthLevel: "-4",
      damageTypePerLevel: [damageTypes[0]],
    },
    {
      healthLevel: "Incapacitated",
      damageTypePerLevel: [damageTypes[0]],
    },
  ]);

  const updateLevelsOfHealth = (newData: HealthLevel[]) => {
    console.log(newData);
    setLevelsOfHealth([...newData]);
  }

  return (
    <>
    <div className="spaceOut">
    <div>
      {levelsOfHealth.map(({ healthLevel, damageTypePerLevel }) => (
        <div className="spaceOut">
          <div className="damageLevelTitle">{healthLevel}</div>
          {damageTypePerLevel.map((type, index) => (
            <ChooseDamage key={index} damageType={type} />
          ))}
        </div>
      ))}
      </div>
      <div>
        <HealthButton levelsOfHealth= {levelsOfHealth} updateLevelsOfHealth= {updateLevelsOfHealth}/>
      </div>
      </div>
    </>
  );
}

const ChooseDamage: React.FC<{ damageType: string }> = ({ damageType }) => {
  if (damageType === damageTypes[3]) {
    return <div className="squareBad"></div>;
  } else if (damageType === damageTypes[2]) {
    return <div className="squareX"></div>;
  } else if (damageType === damageTypes[1]) {
    return <div className="squareSlash"></div>;
  } else if (damageType === damageTypes[0]) {
    return <div className="squareGood"></div>;
  }
};

export default Health;
