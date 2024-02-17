import { Router, Route } from "@solidjs/router";
import Home from "../views/Home";

export default function Routes(){
    return(
        <Router>
            <Route path='/' component={Home}/>
            {/* TODO <Route path='/news' component={News}/> */}
            {/* TODO <Route path='/reviews' component={Reviews}/> */}
        </Router>
    );
}