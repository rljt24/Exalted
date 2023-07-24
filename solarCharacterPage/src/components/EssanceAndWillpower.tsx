import { useState } from "react";

function EssanceAndWillpower() {
  const [checkboxesEss, setCheckboxEss] = useState(
    Array.from({ length: 10 }, () => false)
  );
  const [checkboxesWill, setCheckboxWill] = useState(
    Array.from({ length: 10 }, () => false)
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
      <form>
        <label>Essance</label>
        {checkboxesEss.map((checked, index) => (
          <input
            type="checkbox"
            key={index}
            checked={checked}
            onClick={() => handleCheckbox(index, checkboxesEss, setCheckboxEss)}
          ></input>
        ))}
        <br></br>
        <label>Willpower</label>
        {checkboxesWill.map((checked, index) => (
          <input
            type="checkbox"
            key={index}
            checked={checked}
            onClick={() =>
              handleCheckbox(index, checkboxesWill, setCheckboxWill)
            }
          ></input>
        ))}
      </form>
    </>
  );
}

export default EssanceAndWillpower;
