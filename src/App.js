import React from "react";
import { GrowthBookProvider } from "@growthbook/growthbook-react";
import growthbook from "./growthbook";
import MyComponent from "./MyComponent"; // Ensure this path is correct
import './style.css';

const App = () => {
  return (
    <GrowthBookProvider growthbook={growthbook}>
      <div>
        <h1>Your App</h1>
        <MyComponent />
      </div>
    </GrowthBookProvider>
  );
};
export default App;