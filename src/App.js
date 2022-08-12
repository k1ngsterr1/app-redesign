// Component
import ChatBoxes from "./components/ChatBoxes";
import Menu from "./components/Menu";
import RightSideTabs from "./components/RightSideTabs";

// Theme Context
import { createContext, useState } from "react";
export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="container" id={theme}>
        <Menu></Menu>
        <ChatBoxes></ChatBoxes>
        <RightSideTabs></RightSideTabs>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
