import React, { Component } from 'react';
import Person from './person';
class PhoneBook extends Component {
  deletePerson(id){
    this.props.onDelete(id)
  }

  render() {
    let persons;
    if(this.props.phonebook){
      persons = this.props.phonebook.map(person =>{
        return (
          <Person onDelete={this.deletePerson.bind(this)} key={person._id} person={person} />
        );
      });
    }
    return (
      <div className="PhoneBook col-md-offset-2 col-md-6">
        <h3 className="margin-bottom-35">View Contacts</h3>
        <ul className="list-group">
          {persons}
        </ul>
      </div>
    );
  }
}

/* Validation */
PhoneBook.propTypes = {
  phonebook: React.PropTypes.array,
  onDelete: React.PropTypes.func
}

export default PhoneBook;
