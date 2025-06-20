import { useState } from "react";
import SearchColor from "./SearchColor";
import Square from "./Square";

function App() {
  const [colorValue, setColorValue] = useState('')

  return (
    <div className="App">
      <Square
        colorValue={colorValue}
      />
      <SearchColor 
        colorValue={colorValue}
        setColorValue={setColorValue}
      />
    </div>
  );
}

export default App;
