import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';

class App extends Component {
    render() {
        return (
            <div className="App container">
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Rating</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Book1</td>
                            <td>4.0</td>
                            <td>Delete</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default App;