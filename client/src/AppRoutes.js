import React from 'react';
import Home from './components/Home';
import Pizza from './components/Pizza';
import Checkout from './components/Checkout';
import Drink from './components/Drink';
import NotFound from './components/NotFound';
import Header from './components/Header';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class AppRoutes extends React.Component{
  render(){
    return (
        <BrowserRouter>
          <div>
            <Header/>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/pizza" component={Pizza} />
              <Route path="/drinks" component={Drink} />
              <Route path="/checkout" component={Checkout} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}
export default AppRoutes