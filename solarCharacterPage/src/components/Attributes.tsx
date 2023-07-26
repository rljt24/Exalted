import React from "react";
import { useState } from "react";
import "../App.css"

function Attributes() {
  const startState: boolean[] = Array.from({ length: 10 }, () => false);
  const attributesList: string[][] = [
    ["Strength",
    "Dexterity",
    "Stamina"],
    ["Charisma",
    "Manipulation",
    "Appearance"],
    ["Perception",
    "Intelligence",
    "Wits"]
  ];

  const checkboxesList: [
    boolean[],
    React.Dispatch<React.SetStateAction<boolean[]>>
  ][][] = Array.from({ length: attributesList.length }, () => (
            Array.from({length: attributesList[0].length}, () => (
                useState(startState))
            )
        ));

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
            {attributesList.map((category, indexThird) => (
            <div>
            <React.Fragment key={indexThird}>    
            {attributesList[indexThird].map((attribute, indexFirst) => (
            <React.Fragment key={indexFirst}>
                <label>{attribute}</label>
                {checkboxesList[indexThird][indexFirst][0].map((checked, indexSecond) => (
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
                ))}
                <br></br>
            </React.Fragment>
            ))}
            </React.Fragment>
            </div>
        ))}
      </form>
    </>
  );
}

export default Attributes;
