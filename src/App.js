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
        <Route path="/ReactCV/" exact component = {Home} />
        <Route path="/ReactCV/competences" component = {Knowledges} />
        <Route path="/ReactCV/portfolio" component = {Portfolio} />
        <Route path="/ReactCV/contact" component = {Contact} />
        <Route component = {NotFound} />
      </Switch>
    </BrowserRouter>
  </>
  );
};

export default App;