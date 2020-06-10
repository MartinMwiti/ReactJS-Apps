import React, { Component } from 'react'
import { Button, Label, Input, FormGroup, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class AddBookModal extends Component {


    render() {
        return (
        <div className="App container">
            
            <Button className="my-3" color="primary" onClick={this.props.toggleNewBookModal}>Add Book</Button>
            <Modal isOpen={this.props.newBookModal}>
                <ModalHeader toggle={this.props.toggleNewBookModal}>Add a new book</ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <Label for="title">Title</Label>
                        <Input
                            id="title"
                            value={this.props.newBookData.title}
                            onChange={(e) => {
                                let { newBookData } = this.props // destructuring assignment
                                newBookData.title = e.target.value
                                this.setState({ newBookData })
                            }}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="title">Rating</Label>
                        <Input
                            id="rating"
                            value={this.props.newBookData.rating}
                            onChange={(e) => {
                                let { newBookData } = this.props // destructuring assignment
                                newBookData.rating = e.target.value
                                this.setState({ newBookData })
                            }}
                        />
                    </FormGroup>

                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.props.addBook.bind(this)}>Add Book</Button>{' '}
                    <Button color="secondary" onClick={this.props.toggleNewBookModal}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
        )
    }
}

export default AddBookModal;