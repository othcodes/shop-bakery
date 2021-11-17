import React from 'react';
import Login from './components/Login/Login';
import Bakery from './components/Bakery/Bakery';
import Cart from './components/Cart/Cart';
import Order from './components/Order/Order';
import OrderReceived from './components/Order/OrderReceived/OrderReceived';
import Application from './components/Application';
import Spinner from './components/shared/Spinner/Spinner';
import {  BrowserRouter as Router, Route } from 'react-router-dom';
import { isAuthenticated } from './services/api';
import './assets/sass/style.scss';

const App = () => {

  const auth = isAuthenticated();

  return (
      <Router>
        <Application>
            <Route exact path="/" component={Bakery} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/order" component={Order} />
            <Route exact path="/order-received" component={OrderReceived} />
            <Route exact path="/Spinner" component={Spinner} />
            { (!auth) ? <Route exact path="/login" component={Login} /> : '' }
        </Application>
      </Router>
  );
}
export default App;
