import React, { Component } from 'react';

class CustomerTable extends Component {
  render() {
    return (
      <>
        < Row >
          <Col>
            <Table responsive>
              <thead>
                <tr>
                  <th>Purchase #</th>
                  <th>Customer 1</th>
                  <th>Customer 2</th>
                  <th>Customer 3</th>
                  <th>Customer 4</th>
                  <th>Customer 5</th>
                  <th>Customer 6</th>
                </tr>
              </thead>
            </Table>
          </Col>
        </Row >
      </>
    )
  }
}

export default CustomerTable;