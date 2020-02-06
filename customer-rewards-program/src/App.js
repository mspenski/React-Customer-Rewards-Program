import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'react-bootstrap';
import CustomerTable from './table/table.js'

class App extends Component {
  render() {

    return (
      <>
        <Container>
          <CustomerTable />
        </Container>
      </>
    );
  }
}

export default App;
