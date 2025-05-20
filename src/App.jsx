import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ShoesShop from "./ShoesShop/ShoesShop";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ShoesShop />
    </>
  );
}

export default App;
