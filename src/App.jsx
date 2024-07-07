import './App.css';
import { Switch, Route} from "wouter";

import LetsExplore from "./Pages/LetsExplore/LetsExplore.jsx";
import Menu from "./Pages/Menu/Menu.jsx";
import Discount from "./Pages/Feedback/Feedback.jsx";
import Begin from "./Pages/Begin/Begin.jsx";
import Feedback from "./Pages/Feedback/Feedback.jsx";


function App() {
    return (
        <div>
            <Switch>
                <Route path={'/'} component={LetsExplore}/>
                <Route path={'/menu'} component={Menu}/>
                <Route path={'/menu/feedback'} component={Feedback}/>
                <Route path={'/menu/begin'} component={Begin} />
            </Switch>
        </div>
    )
}

export default App
