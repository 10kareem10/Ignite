import React,{useEffect} from "react";
import {useDispatch} from "react-redux";
import {loadGames} from "./actions/gamesAction";
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";
import GameDetail from "./components/GameDetail";
import { Route } from "react-router-dom";


function App() {
  
  return (
    <div className="App">
      <GlobalStyles />
      {/* <Nav /> */}
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
 