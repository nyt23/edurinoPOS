import './App.css';
import { Switch, Route} from "wouter";

import LetsExplore from "./Pages/LetsExplore/LetsExplore.jsx";
import Menu from "./Pages/Menu/Menu.jsx";
import Discount from "./Pages/Discount/Discount.jsx";
import Begin from "./Pages/Begin/Begin.jsx";


function App() {
    return (
        <div>
            <Switch>
                <Route path={'/'} component={LetsExplore}/>
                <Route path={'/menu'} component={Menu}/>
                <Route path={'/menu/discount'} component={Discount}/>
                <Route path={'/menu/begin'} component={Begin} />
            </Switch>
        </div>
    )
}

export default App
