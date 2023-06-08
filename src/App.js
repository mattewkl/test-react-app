import 
  React,
  {useState}
 from "react";
import PointsCounter from "./components/PointsCounter";
import ClassPointsCounter from "./components/ClassPointsCounter";

function App() {


  return (
    <div className="App">
      <PointsCounter/>
      <ClassPointsCounter/>
    </div>
  );
}

export default App;
 