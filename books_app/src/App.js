import React, { Component } from 'react'
import axios from 'axios'
import { Table, Button, Label, Input, FormGroup, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class App extends Component {
    state = {
        books: [],
        newBookData:{
            title: "",
            rating: ""
        },
        newBookModal: false
    }

    componentWillMount(){
        axios.get("http://localhost:3000/books")
        .then((response)=>this.setState({
            books: response.data // updates state 'books' with data from the server
        })
        )
    };
    // change state
    toggleNewBookModal(){
        this.setState({
            newBookModal: !this.state.newBookModal
        })
    }

    render() {
        
        let books = this.state.books.map((book)=>{
            return(
                <tr>
                    <td>{book.id}</td>
                    <td>{book.title}</td>
                    <td>{book.rating}</td>
                    <td>
                        <Button color="success" size="sm" className="mr-2">Edit</Button>
                        <Button color="danger" size="sm">Delete</Button>
                    </td>
                </tr>

            )
        });

        return (
            <div className="App container">
                <Table>
                    <Button color="primary" onClick={this.toggleNewBookModal.bind(this)}>Add Book</Button>
                    <Modal isOpen={this.state.newBookModal}>
                        <ModalHeader toggle={this.toggleNewBookModal.bind(this)}>Add a new book</ModalHeader>
                        <ModalBody>
                            <FormGroup>
                                <Label for="title">Title</Label>
                                <Input id="title" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="title">Rating</Label>
                                <Input id="title" />
                            </FormGroup>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.toggleNewBookModal.bind(this)}>Add Book</Button>{' '}
                            <Button color="secondary" onClick={this.toggleNewBookModal.bind(this)}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Rating</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {books}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default App;