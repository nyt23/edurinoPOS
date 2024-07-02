import './App.css';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Switch, Route, useLocation } from "wouter";

import LetsExplore from "./Pages/LetsExplore/LetsExplore.jsx";
import Menu from "./Pages/Menu/Menu.jsx";
import Discount from "./Pages/Discount/Discount.jsx";


function App() {

  return (
      <div>
          <Switch>
              <Route path={'/'} component={LetsExplore} />
              <Route path={'/menu'} component={Menu} />
              <Route path={'/menu/discount'} component={Discount} />
          </Switch>
      </div>

  );
}

export default App
