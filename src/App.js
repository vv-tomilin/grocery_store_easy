import React from 'react';
import { Route } from 'react-router';

import './styles.css';

import { Header } from './components';
import { Home, Cart } from './pages';


function App() {
  return (
    <div>
      <Header />
      <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/cart' component={Cart} />
      </div>
    </div>
  );
}

export default App;