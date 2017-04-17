import React, { Component } from 'react';
import PhoneBook from './components/phonebook';
import AddPerson from './components/addPerson';
import logo from './assets/logo.png';
import './App.css';

class App extends Component {
  constructor(){
    super();
    console.log(name);
    this.state = {
      url : 'http://localhost:3001/api/entries',
      phonebook: []
    }
  }

  getPhoneBook(){
    /* set component to this so state can be accessed inside promise */
    var component = this;

    fetch(component.state.url)
     .then( (response) => {
        return response.json()
     })
     .then( (data) => {
        component.setState({
           phonebook: data
        })
        console.log('parsed json', data)
     })
     .catch( (ex) => {
        console.log('parsing failed', ex)
     })
  }

  //Fetch from api
  componentDidMount(){
    this.getPhoneBook();
  }

  handleAddPerson(person){
    var component = this;
    var url = component.state.url;
    fetch(
      url,
      {
        method: 'POST',
        body: JSON.stringify(person),
        headers: {
        'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
        'Content-Type': 'application/json; charset=utf-8'
        }
      }
    )
     .then( (response) => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json()
     })
     .then( (data) => {
        let phonebook = component.state.phonebook;
        phonebook.push(person);
        this.setState({phonebook:phonebook});
     })
     .catch( (ex) => {
         console.log(ex);
     });
  }

  handleDeletePerson(id){
    var component = this;
    var url = component.state.url + '/' + id;

    fetch(
      url,
      {method: 'DELETE'}
    )
     .then( (response) => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response
     })
     .then( (data) => {
        let phonebook = this.state.phonebook;
        let index = phonebook.findIndex(x => x._id === id);
        phonebook.splice(index, 1);
        this.setState({phonebook:phonebook});
        /* We could also fetch from the api again if needed
        component.setState({
           phonebook: component.getPhoneBook()
        });
        */
     })
     .catch( (ex) => {
         console.log(ex);
     });

  }

  render() {
    return (
      <div className="App row">
        <h2>PhoneBook Application</h2>
        <div className="App-header col-sm-12">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <AddPerson addPerson={this.handleAddPerson.bind(this)} />
        <br/>
        <PhoneBook phonebook={this.state.phonebook} onDelete={this.handleDeletePerson.bind(this)}/>
      </div>
    );
  }
}

export default App;
