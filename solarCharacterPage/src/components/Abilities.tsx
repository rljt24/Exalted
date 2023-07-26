import { useState } from "react";
import React from "react";

function Abilities() {
    const startState: boolean[] = Array.from({ length: 10 }, () => false);

    const caste: string[] = ["Dawn", "Zenith", "Twilight", "Night", "Eclipse"];

    const abilityList: string[][] = [
        ["Archery", "Martial Arts", "Melee", "Throw", "War"],
        ["Integrity", "Performance", "Presence", "Resistance", "Survival"],
        ["Craft", "Investigation", "Lore", "Medicine", "Occult"],
        ["Athletics", "Awareness", "Dodge", "Larceny", "Stealth"],
        ["Bureaucracy", "Linguistics", "Ride", "Sail", "Socialize"]
    ];

    const checkboxesList: [
        boolean[],
        React.Dispatch<React.SetStateAction<boolean[]>>
      ][][] = Array.from({ length: abilityList.length }, () =>
        Array.from({ length: abilityList[0].length }, () => useState(startState))
      );

      const handleCheckbox = (
        index: number,
        checkboxes: boolean[],
        setCheckbox: React.Dispatch<React.SetStateAction<boolean[]>>
      ) => {
        let updatedCheckboxes: boolean[] = checkboxes.map((checked, i) =>
          i <= index ? true : checked
        );
        updatedCheckboxes = updatedCheckboxes.map((checked, i) =>
          i > index ? false : checked
        );
        setCheckbox(updatedCheckboxes);
      };

      return (
        <>
      <form id="flex">
        {abilityList.map((category, indexThird) => (
          <div>
            <h2>{caste[indexThird]}</h2>
            <React.Fragment key={indexThird}>
              {abilityList[indexThird].map((attribute, indexFirst) => (
                <React.Fragment key={indexFirst}>
                  <label>{attribute}</label>
                  {checkboxesList[indexThird][indexFirst][0].map(
                    (checked, indexSecond) => (
                      <input
                        type="checkbox"
                        key={indexSecond}
                        checked={checked}
                        onClick={() =>
                          handleCheckbox(
                            indexSecond,
                            checkboxesList[indexThird][indexFirst][0],
                            checkboxesList[indexThird][indexFirst][1]
                          )
                        }
                      ></input>
                    )
                  )}
                  <br></br>
                </React.Fragment>
              ))}
            </React.Fragment>
          </div>
        ))}
      </form>
    </>
      )
}

export default Abilities