import React, { Component } from 'react';
import NavBar from './components/navbar'
import CustomerFeedback from './components/customer_feedback/customer_feedback_container';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavBar />
        <CustomerFeedback />
      </div>
    );
  }
}

export default App;
