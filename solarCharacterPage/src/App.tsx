import Abilities from "./components/Abilities";
import Attributes from "./components/Attributes";
import EssanceAndWillpower from "./components/EssanceAndWillpower";
import BasicInfo from "./components/basicInfo";

function App() {
  return (
    <>
      <BasicInfo />
      <EssanceAndWillpower />
      <div className="line-container">
        <div className="line"></div>
        <h1 className="title">Attributes</h1>
      </div><br></br>
      <Attributes /><br></br>
      <div className="line-container">
        <div className="line"></div>
        <h1 className="title">Abbilities</h1>
      </div><br></br>
      <Abilities />
    </>
  );
}

export default App;
