import React, { Component } from 'react'
import axios from 'axios'
import { Table, Button } from 'reactstrap';

// components
import AddBookModal from './components/AddBookModal'
import EditBookModal from './components/EditBookModal'



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

    // modal appear/disappear func
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
                <AddBookModal 
                    toggleNewBookModal={this.toggleNewBookModal.bind(this)} 
                    newBookModal={this.state.newBookModal}
                    addBook={this.addBook.bind(this)}
                    newBookData={this.state.newBookData}
                />
            
                {/* EDIT BOOK MODAL */}
                <EditBookModal 
                    toggleEditBookModal={this.toggleEditBookModal.bind(this)} 
                    editBookModal={this.state.editBookModal}
                    updateBook={this.updateBook.bind(this)}
                    editBookData={this.state.editBookData}
                />

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