import './App.css';
import { Switch, Route} from "wouter";

import LetsExplore from "./Pages/LetsExplore/LetsExplore.jsx";
import Menu from "./Pages/Menu/Menu.jsx";
import Discount from "./Pages/Feedback/Discount/Discount.jsx";
import Begin from "./Pages/Begin/Begin.jsx";
import Feedback from "./Pages/Feedback/Feedback.jsx";
import Secure from "./Pages/Secure/Secure.jsx";
import Game from "./Pages/Game/Game.jsx";


function App() {
    return (
        <div>
            <Switch>
                <Route path={'/'} component={LetsExplore}/>
                <Route path={'/menu'} component={Menu}/>
                <Route path={'/menu/feedback'} component={Feedback}/>
                <Route path={'/menu/begin'} component={Begin} />
                <Route path={'/menu/feedback/discount'} component={Discount}/>
                <Route path={'/menu/secure'} component={Secure}/>
                <Route path={'/menu/game/'} component={Game}/>
            </Switch>
        </div>
    )
}

export default App
