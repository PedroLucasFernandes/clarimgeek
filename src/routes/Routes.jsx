import { Router, Route } from "@solidjs/router";
import Home from "../views/Home";
import Search from "../views/Search";

export default function Routes(){
    return(
        <Router>
            <Route path='/' component={Home}/>
            <Route path='/search' component={Search}/>
            {/* TODO <Route path='/news' component={News}/> */}
            {/* TODO <Route path='/reviews' component={Reviews}/> */}
        </Router>
    );
}