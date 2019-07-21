import React, {Component} from 'react';
import Contacts from "./Components/Form/form"


class App extends Component {
  state = {
    contacts :[]
  }

  componentWillMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    //fetch('http://localhost:3000/message/1')
    .then(res => res.json())
    .then((data) => {
      
      this.setState({ contacts: data })
      
    })
    .catch(console.log)
  }


  render () {
    return (
      <Contacts contacts={this.state.contacts} />
    );
  }
}
export default App;
