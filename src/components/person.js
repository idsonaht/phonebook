import React, { Component } from 'react';

class Person extends Component {
  constructor(){
    super();
    this.state = {
      toggle: true,
      edit:   true,
      deleteItem: false,
      contentEditable: false,
      contentEditableStyle:false,
      contentEditableButton:true
    }
  }

  deletePerson(id){
    let del = confirm('Are you sure you want to delete this person?');
    if (del) {
      this.props.onDelete(id);
    }
  }

  toggleEditPerson(id){
    this.setState({
      contentEditable : !this.state.contentEditable,
      contentEditableStyle : !this.state.contentEditableStyle,
      contentEditableButton : !this.state.contentEditableButton,
    });
  }

  editPerson(id){
    var person = {
      firstName : this.refs.firstName.innerHTML.trim(),
      lastName : this.refs.lastName.innerHTML.trim(),
      email : this.refs.email.innerHTML.trim(),
      phone : this.refs.phone.innerHTML.trim(),
      address : this.refs.address.innerHTML.trim(),
      city : this.refs.city.innerHTML.trim(),
      country : this.refs.country.innerHTML.trim(),
      _id : id
    }

    let editTrue = confirm('Are you sure you want to save this person?');
    if (editTrue) {
      this.props.onEdit(id, person);
    }
  }

  togglePerson(){
    this.setState({
      toggle: !this.state.toggle,
      edit: !this.state.edit,
      deleteItem : !this.state.deleteItem
    });
  }

  render() {
    let toggle = this.state.toggle ? 'collapse border-top' : 'collapse border-top in';
    let hover = this.state.toggle ? 'overlay' : '';
    let edit = this.state.edit ? 'edit-item display-none' : 'edit-item display-block';
    let deleteItem = this.state.deleteItem ? 'delete-item display-none' : 'delete-item display-block';
    let contentEditable = this.state.contentEditable;
    let contentEditableStyle = this.state.contentEditableStyle ? 'editable' : '';
    let contentEditableButton = this.state.contentEditableStyle ? 'btn btn-info display-block' : 'btn btn-info display-none';

    return (
      <li  className="Person list-group-item margin-bottom-10" >
        <a href="#" className={deleteItem} onClick={this.deletePerson.bind(this, this.props.person._id)}> <span className="glyphicon glyphicon-remove pull-right"></span></a>
        <a href="#" className={edit} onClick={this.toggleEditPerson.bind(this, this.props.person._id)}> <span className="glyphicon glyphicon-edit pull-right"></span></a>
        <h4 role="button" onClick={this.togglePerson.bind(this)}>{this.props.person.firstName} {this.props.person.lastName}</h4>
        <div className={hover} >
          <div className="text">{this.props.person.group}</div>
        </div>
        <div id={this.props.person.firstName} className={toggle}>
          <ul className="custom-bullet">
            <li>First Name: <strong contentEditable={contentEditable} className={contentEditableStyle} ref="firstName">{this.props.person.firstName}</strong></li>
            <li>Last Name: <strong contentEditable={contentEditable} className={contentEditableStyle} ref="lastName">{this.props.person.lastName}</strong></li>
            <li>Email: <strong contentEditable={contentEditable} className={contentEditableStyle} ref="email">{this.props.person.email}</strong></li>
            <li>Phone: <strong contentEditable={contentEditable} className={contentEditableStyle} ref="phone">{this.props.person.phone}</strong></li>
            <li>Address: <strong contentEditable={contentEditable} className={contentEditableStyle} ref="address">{this.props.person.address}</strong></li>
            <li>City: <strong contentEditable={contentEditable} className={contentEditableStyle} ref="city">{this.props.person.city}</strong></li>
            <li>Country: <strong contentEditable={contentEditable} className={contentEditableStyle} ref="country">{this.props.person.country}</strong></li>
            <button className={contentEditableButton} onClick={this.editPerson.bind(this, this.props.person._id)}>Save!</button>
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
