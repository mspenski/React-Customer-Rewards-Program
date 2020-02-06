import React, { Component } from 'react';
import { Row, Col, Table } from 'react-bootstrap';
import './table.css';


class CustomerTable extends Component {
  constructor(props) {
    super(props);

    let tableRow = []

    createNewRow = () => {
      for (let i = 0; i < 6; i++) {
        let data = Math.floor(Math.random() * 200);
        this.tableRow.push(data);
      }
    }

    renderTableRows = () => {
      this.createNewRow();
      return (
        <tr>
          <td>{tableRow[0]}</td>
          <td>{tableRow[1]}</td>
          <td>{tableRow[2]}</td>
          <td>{tableRow[3]}</td>
          <td>{tableRow[4]}</td>
          <td>{tableRow[5]}</td>
        </tr>
      )
    }
  }

  render() {
    return (
      <>
        < Row >
          <Col>
            <Table responsive>
              <thead>
                <tr>
                  <th>Customer 1</th>
                  <th>Customer 2</th>
                  <th>Customer 3</th>
                  <th>Customer 4</th>
                  <th>Customer 5</th>
                  <th>Customer 6</th>
                </tr>
              </thead>
              <tbody>
                {this.renderTableRows()}
              </tbody>
            </Table>
          </Col>
        </Row >
      </>
    )
  }
}

export default CustomerTable;