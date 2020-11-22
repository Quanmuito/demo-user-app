import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header, Footer } from './components/layouts/Layouts';
import { Container } from 'react-bootstrap';
import Home from './components/home/Home';
import Profile from './components/profile/Profile';

export default function App() {
  return (
    <>
      <Header />
      <div className="App">      
        <Container>

          <Router>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/:id">
                <Profile />
              </Route>
            </Switch>
          </Router>
          
        </Container>
      </div>
      <Footer />
    </>
  );
}