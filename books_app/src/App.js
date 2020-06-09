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
        editBookData:{
            id: "",
            title: "",
            rating: ""
        },
        newBookModal: false,
        editBookModal: false
    }


    _refreshBooks(){
        axios.get("http://localhost:3000/books")
        .then((response)=>this.setState({
            books: response.data // updates state 'books' with data from the server
        })
        )
    }


    componentDidMount(){
        this._refreshBooks()
    };


    // Add book func
    addBook(){
        axios.post("http://localhost:3000/books", this.state.newBookData)
        .then((response)=>{
            let { books } = this.state
            books.push(response.data)
// setState() enqueues changes to the component state and tells React that this component and its children need to be re-rendered with the updated state.
            this.setState({ 
                books, // updates the books
                newBookModal:false, // for closing the modal
                newBookData:{title: "",rating: ""} //resets/clear the modal field
            })
        })
    }


    // Populate Edit book func - 'Edit button'
    editBookData(id, title, rating){
        this.setState({
            editBookData: {id, title, rating}, // populate i.e sets editBookData fields with the retrieved book field data
            editBookModal: !this.state.editBookModal
        })
    }

    // Edit book func - 'Update Book button'
    updateBook(){
        let {title, rating} = this.state.editBookData

        axios.put("http://localhost:3000/books/"+this.state.editBookData.id, {title, rating}) // {title, rating} are the new updated data taken in
        
        .then((response)=>
            this._refreshBooks() // func to simply refresh after editing
        )
        // close modal after edit and set the 'editBookData' fields to empty
        this.setState({
            editBookModal: false,
            editBookData: {id: "",title:"",rating: ""} //clear
        })
    }


    // Delete Book
    deleteBook(id){
        axios.delete("http://localhost:3000/books/"+id)
        .then((response)=>
            this._refreshBooks()
        )
    }

    // modal appear/disapper func
    toggleNewBookModal(){
        this.setState({
            newBookModal: !this.state.newBookModal
        })
    }

    // modal appear/disapper func
    toggleEditBookModal(){
        this.setState({
            editBookModal: !this.state.editBookModal
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
                        <Button color="success" size="sm" className="mr-2" onClick={this.editBookData.bind(this, book.id, book.title, book.rating)}>Edit</Button>
                        <Button color="danger" size="sm" onClick={this.deleteBook.bind(this, book.id)}>Delete</Button>
                    </td>
                </tr>
                
            )
        });

        return (
            <div className="App container">

            <h1>Books App</h1>
                {/* ADD NEW BOOK MODAL */}
                <Button className="my-3" color="primary" onClick={this.toggleNewBookModal.bind(this)}>Add Book</Button>
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
                        <FormGroup onSubmit={this.onSubmit}>
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
            
                {/* EDIT BOOK MODAL */}
                <Modal isOpen={this.state.editBookModal}>
                    <ModalHeader toggle={this.toggleEditBookModal.bind(this)}>Add a new book</ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label for="title">Title</Label>
                            <Input
                                id="title"
                                value={this.state.editBookData.title}
                                onChange={(e) => {
                                    let { editBookData } = this.state // destructuring assignment
                                    editBookData.title = e.target.value
                                    this.setState({ editBookData })
                                }}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="title">Rating</Label>
                            <Input
                                id="rating"
                                value={this.state.editBookData.rating}
                                onChange={(e) => {
                                    let { editBookData } = this.state // destructuring assignment
                                    editBookData.rating = e.target.value
                                    this.setState({ editBookData })
                                }}
                            />
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.updateBook.bind(this)}>Update Book</Button>{' '}
                        <Button color="secondary" onClick={this.toggleEditBookModal.bind(this)}>Cancel</Button>
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