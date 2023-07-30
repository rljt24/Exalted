import "../cssFiles/Health.css"
import React from "react";

const levelsOfHealth: {healthLevel: string, damageType: string[]}[] = [
    {
        healthLevel: '0', 
        damageType: ['bashing', 'bashing']
    }, 
    {
        healthLevel: '-1',
        damageType: ['none', 'none']
    },
    {
        healthLevel:'-2',
        damageType: ['none', 'none']
    }, 
    {
        healthLevel: '-4',
        damageType: ['none']
    },
    {
        healthLevel: 'incapacitated',
        damageType: ['none']
    }
]; 

function Health(){

    return (
        <>
        {levelsOfHealth.map(({healthLevel, damageType}) => (
            <div className="spaceOut">
                <div className="damageLevelTitle">{healthLevel}</div>
                {damageType.map((type, index) => (
                    <ChooseDamage key={index} damageType={type} />
                ))}
            </div>
        ))}
        </>
    )
}

const ChooseDamage: React.FC<{damageType: string}> = ({damageType}) => {
   if(damageType === 'agrivated'){
    return <div className="squareBad"></div>;
   } else if(damageType === 'lethal'){
    return <div className="squareX"></div>;
   } else if(damageType === 'bashing'){
    return <div className="squareSlash"></div>;
   } else if(damageType === 'none'){
    return <div className="squareGood"></div>;
   }
}

export default Health;