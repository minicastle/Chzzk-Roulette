// import { useEffect } from "react";
import { useState } from "react";
import { barTesterData, barTesterUserData } from "./data/BarTester";
import BarRoulette from "./Roulette/BarRoulette";

function App() {
  const [time, setTime] = useState<Date>(new Date());
  return (
    <div>
      <button onClick={() => setTime(new Date())}>Load</button>
      <BarRoulette
        targetData={barTesterData}
        user={barTesterUserData}
        price={1000}
        time={time}
      ></BarRoulette>
    </div>
  );
}

export default App;
