// import { useEffect } from "react";
import { barTesterData, barTesterUserData } from "./data/BarTester";
import BarRoulette from "./Roulette/BarRoulette";

function App() {
  // useEffect(() => {
  //   setInterval(() => {}, 1000);
  // }, []);
  return (
    <div>
      <BarRoulette
        targetData={barTesterData}
        user={barTesterUserData}
        price={1000}
      ></BarRoulette>
    </div>
  );
}

export default App;
