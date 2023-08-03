import "../cssFiles/Health.css";
import React, { useState } from "react";
import HealthButton from "./HealthButtons";

type HealthLevel = {
    healthLevel: string;
    damageType: string[];
  };

function Health() {
    
    let [levelsOfHealth, setLevelsOfHealth] = useState([
        {
          healthLevel: "0",
          damageType: ["none", "none"],
        },
        {
          healthLevel: "-1",
          damageType: ["none", "none"],
        },
        {
          healthLevel: "-2",
          damageType: ["none", "none"],
        },
        {
          healthLevel: "-4",
          damageType: ["none"],
        },
        {
          healthLevel: "incapacitated",
          damageType: ["none"],
        },
      ]);

    const updateLevelsOfHealth = (newData:HealthLevel[]) => {
        setLevelsOfHealth(newData);
    }

  return (
    <>
    <div className="spaceOut">
    <div>
      {levelsOfHealth.map(({ healthLevel, damageType }) => (
        <div className="spaceOut">
          <div className="damageLevelTitle">{healthLevel}</div>
          {damageType.map((type, index) => (
            <ChooseDamage key={index} damageType={type} />
          ))}
        </div>
      ))}
      </div>
      <div>
        <HealthButton levelsOfHealth = {updateLevelsOfHealth}/>
      </div>
      </div>
    </>
  );
}

const ChooseDamage: React.FC<{ damageType: string }> = ({ damageType }) => {
  if (damageType === "Agrivated") {
    return <div className="squareBad"></div>;
  } else if (damageType === "Lethal") {
    return <div className="squareX"></div>;
  } else if (damageType === "Bashing") {
    return <div className="squareSlash"></div>;
  } else if (damageType === "none") {
    return <div className="squareGood"></div>;
  }
};

export default Health;
