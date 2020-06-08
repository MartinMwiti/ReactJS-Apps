import React, { Component } from 'react'
import { Container, Button, Alert } from 'reactstrap';

class App extends Component {

  state = {
    visible: true
  }

// Adds the 'x' feature. You get the func that whenever you click on the 'x' the alert box disapears.
    // if you wish to have in the alert button 'toggle={this.toggle.bind(this)}' 
  toggle(){ // func to change the state
    this.setState({
      visible: ! this.state.visible
    })
  }

  // // if you wish to have in the alert button 'toggle={this.toggle}' 
  // toggle=()=>{
  //   this.setState({
  //     visible: ! this.state.visible
  //   })
  // }

  render() {
    return (
          
    // '<Container>' mimics bootstraps <div class="container"></div>
    <Container>

      {/* <Button color="primary">Button</Button> {' '} */}
      <Button color="primary" disabled={true} active={true}>Button</Button> {' '}
      
      <Button color="secondary" active={true}>Button</Button> {' '}

      {/* <Button color="success" block={true}>Button</Button> {' '} */}
      {/* <Button color="success" size="sm">Button</Button> {' '} */}    
      <Button color="success" onClick={this.toggle.bind(this)}>Button</Button> {' '} {/* when you click this button, it call the 'alert' message button */}

      <Button color="info" size="lg">Button</Button> {' '}
      {/* <Button color="info" outline={true}>Button</Button> {' '} */}

      <Button color="info" outline={true}>Button</Button> {' '}
      <Button color="link">Button</Button> {' '}

      <hr/>
      {/* <Alert>Hi! i'm an alert</Alert> */}
      <Alert color="primary" isOpen={this.state.visible} toggle={this.toggle.bind(this)}>Hi! i'm an alert</Alert>

    </Container>

    )
  }
}


export default App