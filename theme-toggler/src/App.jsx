// import { useState } from "react";
import ThemedButton from "./ThemedButton";
import ThemeProvider from "./ThemeProvider";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <ThemeProvider>
        <div>
          <h1>Context API Example</h1>
          <ThemedButton />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
