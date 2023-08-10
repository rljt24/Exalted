import  {caste}  from "./Abilities"

function BasicInfo(){
    return(
        <>
        <form>
            <label>Character Name</label>
            <input></input><br></br>
            <label>Caste</label>
            <select>
                {caste.map((cast) => (
                  <option value={cast}>{cast}</option>  
                ))}
            </select><br></br>
            <label>Experience</label>
            <input></input>
        </form>
        </>
    )
}

export default BasicInfo;