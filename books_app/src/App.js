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

    componentDidMount(){
        axios.get("http://localhost:3000/books")
        .then((response)=>this.setState({
            books: response.data // updates state 'books' with data from the server
        })
        )
    };

    // Add book
    addBook(){
        axios.post("http://localhost:3000/books", this.state.newBookData)
        .then((response)=>{
            let { books } = this.state
            books.push(response.data)

            this.setState({ 
                books, // updates the books
                newBookModal:false, // for closing the modal
                newBookData:{
                    title: "",
                    rating: ""
                } //resets the modal
            })
        })
    }



    // change state
    toggleNewBookModal(){
        this.setState({
            newBookModal: !this.state.newBookModal
        })
    }

    render() {
        // the 'i' i've added to give each element a unique key as recommended by React. Not necessary.
        let books = this.state.books.map((book, i)=>{
            return( 
                <tr key={i}>
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
            <div className="App">

                <Button color="primary" onClick={this.toggleNewBookModal.bind(this)}>Add Book</Button>
                <Modal isOpen={this.state.newBookModal}>
                    <ModalHeader toggle={this.toggleNewBookModal.bind(this)}>Add a new book</ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label for="title">Title</Label>
                            <Input
                                id="title"
                                value={this.state.newBookData.title}
                                onChange={(e) => {
                                    let { newBookData } = this.state // destructuring assignment
                                    newBookData.title = e.target.value
                                    this.setState({ newBookData })
                                }}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="title">Rating</Label>
                            <Input
                                id="rating"
                                value={this.state.newBookData.rating}
                                onChange={(e) => {
                                    let { newBookData } = this.state // destructuring assignment
                                    newBookData.rating = e.target.value
                                    this.setState({ newBookData })
                                }}
                            />
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.addBook.bind(this)}>Add Book</Button>{' '}
                        <Button color="secondary" onClick={this.toggleNewBookModal.bind(this)}>Cancel</Button>
                    </ModalFooter>
                </Modal>
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
                        {books}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default App;