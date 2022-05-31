import React from "react";
import {
  NavLink,
  Route,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import AboutPage from "./components/About/AboutPage";
import HomePage from "./components/Home/HomePage";
import Contact from "./components/Contact/Contact";
import Users from "./components/Users/Users";
import User from "./components/User/User";
import Error from "./components/Error/Error";
import { useTheme } from "./Context";

function App() {
  const { theme, setTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Router>
        <div>
          <a
            href="#"
            id="btnTheme"
            className={`float-start theme-btn-${theme}`}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <FontAwesomeIcon icon={faMoon} />
          </a>
          <nav>
            <ul>
              <li>
                <NavLink activeClassName="activeElementNew" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="activeElement" to="/about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="activeElement" to="/users">
                  Users
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="activeElement" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <Switch>
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={AboutPage} />
            <Route path="/users/:id" component={User} />
            <Route path="/users" component={Users} />
            <Route path="/" exact component={HomePage} />
            <Route path="*" component={Error} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
