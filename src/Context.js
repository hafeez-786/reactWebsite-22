//Theme Data
//User Auth
//Location
//Prop Driving

//Steps :

//1: Create a context using createContext
//2: Wrap around component Tree
//3: Place the value that is supposed to be passed down
//4: Read the value of the context

import React, { createContext, useState, useEffect, useContext } from "react"; //1st Step

const Theme = createContext(); //2nd step assign the context to the varriable
export const Provider = ({ children }) => {
  //3rd step
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    // When the component is being mounted
    // Whenever there is change the value
  }, [theme]);

  const values = { theme, setTheme };
  return <Theme.Provider value={values}>{children}</Theme.Provider>;
};

export const useTheme = () => useContext(Theme);

