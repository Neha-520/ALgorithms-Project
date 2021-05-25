import React from "react";
import { Switch,Route} from "react-router-dom";
import Searching from "./Searching";
import Menu from "./Menu.js";
import About from "./About.js";

import Algolist from "./algolist.js";
import SortingVis from './SortingVis.js';
export default function MainRouter()
{
  return (<>
<Switch>
<Route path="/searching" component={Searching} />
<Route exact path="/About" component={About} />
  <Route  exact path="/" component={Menu} />
  <Route path="/algolist" component={Algolist} />
  <Route exact path="/SortingVis" component={SortingVis} />
  </Switch>
  </>
  );
}