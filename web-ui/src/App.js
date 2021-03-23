import { Container } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';

import './App.scss';

import Nav from './components/Nav';
import Home from './components/Home';
import CreateUser from './components/users/CreateUser';
import CreateMeeting from './components/meetings/CreateMeeting';
import ShowMeeting from './components/meetings/ShowMeeting';
import EditMeeting from './components/meetings/EditMeeting';


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

          <Route exact path="/meetings/create">
            <CreateMeeting />
          </Route>

          <Route exact path="/meetings/:id">
            <ShowMeeting />
          </Route>

          <Route exact path="/meetings/edit/:id">
            <EditMeeting />
          </Route>
        </Switch>
      </Container>
      <div className="footer"></div>
    </>
  );
}

export default App;
