import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom' ;
import Home from './pages/Home';
import Contact from './pages/Contact';
import Knowledges from './pages/Knowledges';
import NotFound from './pages/NotFound';
import Portfolio from './pages/Portfolio';

const App = () => {
  return (
  <>
    <BrowserRouter>
      <Switch>
        <Route component = {Home} />
        <Route path="/competences" component = {Knowledges} />
        <Route path="/portfolio" component = {Portfolio} />
        <Route path="/contact" component = {Contact} />
      </Switch>
    </BrowserRouter>
  </>
  );
};

export default App;