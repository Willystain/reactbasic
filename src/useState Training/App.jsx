import React, { useState } from "react";
import data from "./data";
import ListComponent from "./ListComponent";

const App = () => {
  const [userData, setUserData] = useState(data);

  const wipe = () => {
    setUserData([]);
  };

  return (
    <div>
      <h4>{userData.length}</h4>
      <ListComponent userData={userData} />
      <button onClick={wipe}>Delete All</button>
    </div>
  );
};

export default App;
