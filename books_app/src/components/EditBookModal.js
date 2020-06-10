import React, { Component } from 'react'
import { Button, Label, Input, FormGroup, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class EditBookModal extends Component {

    render() {
        return (
            <div className="App container">

                <Modal isOpen={this.props.editBookModal}>
                    <ModalHeader toggle={this.props.toggleEditBookModal}>Add a new book</ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label for="title">Title</Label>
                            <Input
                                id="title"
                                value={this.props.editBookData.title}
                                onChange={(e) => {
                                    let { editBookData } = this.props // destructuring assignment
                                    editBookData.title = e.target.value
                                    this.setState({ editBookData })
                                }}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="title">Rating</Label>
                            <Input
                                id="rating"
                                value={this.props.editBookData.rating}
                                onChange={(e) => {
                                    let { editBookData } = this.props // destructuring assignment
                                    editBookData.rating = e.target.value
                                    this.setState({ editBookData })
                                }}
                            />
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.props.updateBook}>Update Book</Button>{' '}
                        <Button color="secondary" onClick={this.props.toggleEditBookModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>

            </div>
        )
    }
}

export default EditBookModal;