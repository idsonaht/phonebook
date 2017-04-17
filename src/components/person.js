import React, { Component } from 'react';

class Person extends Component {
  constructor(){
    super();
    this.state = {
      toggle: true
    }
  }

  deletePerson(id){
    let del = confirm('Are you sure you want to delete this person?');
    if (del) {
      this.props.onDelete(id);
    }
  }

  togglePerson(){
    this.setState({
      toggle: !this.state.toggle,
    });
  }

  render() {
    let toggle = this.state.toggle ? 'collapse border-top' : 'collapse border-top in';
    let hover = this.state.toggle ? 'overlay' : '';

    return (
      <li role="button" className="Person list-group-item margin-bottom-10" onClick={this.togglePerson.bind(this)}>
        <a href="#" className="delete-item" onClick={this.deletePerson.bind(this, this.props.person._id)}> <span className="glyphicon glyphicon-remove pull-right"></span></a>
        <h4>{this.props.person.firstName} {this.props.person.lastName}</h4>
        <div className={hover} >
          <div className="text">{this.props.person.group}</div>
        </div>
        <div id={this.props.person.firstName} className={toggle}>
          <ul className="custom-bullet">
            <li>First Name: <strong>{this.props.person.firstName}</strong></li>
            <li>Last Name: <strong>{this.props.person.lastName}</strong></li>
            <li>Email: <strong>{this.props.person.email}</strong></li>
            <li>Phone: <strong>{this.props.person.phone}</strong></li>
            <li>Address: <strong>{this.props.person.address}</strong></li>
            <li>City: <strong>{this.props.person.city}</strong></li>
            <li>Country: <strong>{this.props.person.country}</strong></li>
          </ul>
        </div>
      </li>
    );
  }
}

/* Validation */
Person.propTypes = {
  person: React.PropTypes.object,
  onDelete: React.PropTypes.func
}

export default Person;
