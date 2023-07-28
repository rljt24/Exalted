import "../cssFiles/Health.css"

function Health(){
    const typesOfDamage: string[] = ["Bashing", "Leathal", "Agrivated"];
    const levelsOfHealth: number[] = [2, 2, 2, 1, 1]; // [0, -1, -2 , -4, incapacitated]
    const levelsOfDamage: number[] = [0, 0, 0]; // [Bashing, Leathal, Agrivated]

    return (
        <>
        <div className="spaceOut">
            <div className="damageLevelTitle">0</div>
            <div className="squareX"></div>
            <div className="squareX"></div>
            <div className="squareX"></div>
            </div>
        <div className="spaceOut">
            <div className="damageLevelTitle">-1</div>
            <div className="squareX"></div>
            <div className="squareGood"></div>
        </div>
        </>
    )
}

export default Health;