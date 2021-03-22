import { Container } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';

import './App.scss';

import Nav from './components/Nav';
import Home from './components/Home';
import CreateUser from './components/users/CreateUser';


function App() {
  return (
    <>
      <Nav />
      <Container className="mainContainer">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route> 

          <Route exact path="/users/create">
            <CreateUser />
          </Route>
        </Switch>
      </Container>
      <div className="footer"></div>
    </>
  );
}

export default App;
