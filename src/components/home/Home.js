import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import './styleHome.scss';
import Cards from './Cards';

export default function Home() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => setUsers(json))
    }, [])
    
  return (
    <div className="home">
      <div className="home__title">
        <h1>LIST OF USERS</h1>
      </div>
      <Row>
        {
          users.map(user => (
            <Col key={ user.id } className="home__col">
              <Cards user={ user } />
            </Col>
          ))
        }
      </Row>
    </div>
    
  )
}
