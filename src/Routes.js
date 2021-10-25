import React from "react";
import Navbar from './Navbar'
import App from "./App";
import Shop from './Shop';
import Cart from "./Cart";
import { BrowserRouter,Switch,Route } from "react-router-dom";

const Routes = () => {
    return(
           <BrowserRouter>
                  <div>
<Navbar/>
<Switch>
<Route exact path="/"component={App}/>
<Route exact path="/shop"component={Shop}/>
<Route exact path="/cart"component={Cart}/>

</Switch>
</div> 
</BrowserRouter>
    )
}
export default Routes;