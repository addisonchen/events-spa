import { Container } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';

import './App.scss';

import Nav from './components/Nav';
import Home from './components/Home';


function App() {
  return (
    <Container>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route> 
      </Switch>
    </Container>
  );
}

export default App;
