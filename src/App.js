import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header, Footer } from './layouts';
import { Container } from 'react-bootstrap';
import Home from './components/home/Home';
import Profile from './components/profile/Profile';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Container style={ style.container }>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/:id">
              <Profile />
            </Route>
          </Switch>
        </Container>
        <Footer />
      </div>      
    </Router>    
  );
}

const style = {
  container: {
    marginBottom: '10vh'
  }
};