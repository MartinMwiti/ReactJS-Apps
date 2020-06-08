import React from 'react';
import { Container, Button } from 'reactstrap';
import './App.css';

function App() {
  return (
    // '<Container>' mimics bootstraps <div class="container"></div>
    <Container>

      {/* <Button color="primary">Button</Button> {' '} */}
      <Button color="primary" disabled={true} active={true}>Button</Button> {' '}
      
      <Button color="secondary" active={true}>Button</Button> {' '}

      {/* <Button color="success" block={true}>Button</Button> {' '} */}
      <Button color="success" size="sm">Button</Button> {' '}

      <Button color="info" size="lg">Button</Button> {' '}
      {/* <Button color="info" outline={true}>Button</Button> {' '} */}

      <Button color="info" outline={true}>Button</Button> {' '}
      <Button color="link">Button</Button> {' '}

    </Container>
  );
}

export default App;
