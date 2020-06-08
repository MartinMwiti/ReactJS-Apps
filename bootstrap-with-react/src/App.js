import React, { Component } from 'react'
import { Container, Button, Alert, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class App extends Component {

  state = {
    visible: true,
    modalIsOpen: false
  }

  // CHANGE STATE

// Adds the 'x' feature. You get the func that whenever you click on the 'x' the alert box disapears.
    // if you wish to have in the alert button 'toggle={this.toggle.bind(this)}' 
  toggleAlert(){ // func to change the state
    this.setState({
      visible: ! this.state.visible
    })
  }
  // // if you wish to have in the alert button 'toggle={this.toggle}' 
  // toggleAlert=()=>{
  //   this.setState({
  //     visible: ! this.state.visible
  //   })
  // }
  

 // CHANGE STATE
  // also adds the 'x' icon and also opens up the modal when 'onClick' in the button is used since the value will be true & this will set '<Modal isOpen={this.state.modalIsOpen}>' to true which opens up the modal
 toggleModal(){ // func to change the state
    this.setState({
      modalIsOpen: ! this.state.modalIsOpen
    })
  }


  render() {
    return (
          
    // '<Container>' mimics bootstraps <div class="container"></div>
    <Container>
    {/* BUTTONS */}
      {/* <Button color="primary">Button</Button> {' '} */}
      <Button color="primary" disabled={true} active={true}>Button</Button> {' '}
      
      <Button color="secondary" active={true}>Button</Button> {' '}

      {/* <Button color="success" block={true}>Button</Button> {' '} */}
      {/* <Button color="success" size="sm">Button</Button> {' '} */}    
      <Button color="success" onClick={this.toggleAlert.bind(this)}>Button</Button> {' '} {/* when you click this button, it call the 'alert' message button */}
  

      <Button color="info" size="lg">Button</Button> {' '}
      {/* <Button color="info" outline={true}>Button</Button> {' '} */}

      <Button color="info" outline={true}>Button</Button> {' '}
      <Button color="link">Button</Button> {' '}


      <hr/>
    {/* ALERT */}

      {/* <Alert>Hi! i'm an alert</Alert> */}
      <Alert color="primary" isOpen={this.state.visible} toggle={this.toggleAlert.bind(this)}>Hi! i'm an alert</Alert>


      <hr/>
    {/* MODAL */}

    <Button color="primary" onClick={this.toggleModal.bind(this)}>Open Modal</Button>
    <Modal isOpen={this.state.modalIsOpen}>

      <ModalHeader toggle={this.toggleModal.bind(this)}>Modal Title</ModalHeader>

      <ModalHeader>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </ModalHeader>

      <ModalFooter>
        <Button color="primary">Sign Up</Button>
        <Button color="secondary" onClick={this.toggleModal.bind(this)}>Cancel</Button>
      </ModalFooter>  

    </Modal>





    </Container>

    )
  }
}


export default App