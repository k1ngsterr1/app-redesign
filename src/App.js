import React from "react";

// Component
import ChatBoxes from "./components/ChatBoxes";
import Menu from "./components/Menu";
import RightSideTabs from "./components/RightSideTabs";

const App = () => {
  return (
    <div className="container">
      <Menu />
      <ChatBoxes></ChatBoxes>
      <RightSideTabs></RightSideTabs>
    </div>
  );
};

export default App;
