import React, { Component } from 'react';

class AddPerson extends Component {
  constructor(){
    super();
    this.state = {
      newPerson : {}
    }
  }

  /* Submit Handler */
  handleSubmit(e){
    var formIsValid = true;
    /* Check if form has empty values */
    for (const key of Object.keys(this.refs)) {
      if(this.refs[key].value === ''){
        alert(key + ' is required');
        formIsValid = false;
      }
    }

    /* Create newPerson object and add form data */
    if(formIsValid){
      var newPerson = {};
      for (const key of Object.keys(this.refs)) {
        newPerson[key] = this.refs[key].value;
      }
        this.setState({
          newPerson
        }, function(){
          this.props.addPerson(this.state.newPerson);
        });
    }
    e.preventDefault();
  }

  render() {
    return (
      <div className="col-md-4">
        <h3>Add Person</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group row">
            <i className="glyphicon glyphicon-user"></i>
            <label>First Name *</label>
            <input type="text" ref="firstName" className="form-control" placeholder="Sherlock" required/>
          </div>
          <div className="form-group row">
            <i className="glyphicon glyphicon-user"></i>
            <label>Last Name *</label>
            <input type="text" ref="lastName" className="form-control" placeholder="Holmes" required/>
          </div>
          <div className="form-group row">
            <i className="glyphicon glyphicon-envelope"></i>
            <label>Email *</label>
            <input type="email" ref="email" className="form-control" placeholder="thanosdi@live.com" required/>
          </div>
          <div className="form-group row">
            <i className="glyphicon glyphicon-earphone"></i>
            <label>Phone *</label>
            <input type="text" ref="phone" className="form-control" placeholder="+447712345678" required/>
          </div>
          <div className="form-group row">
            <i className="glyphicon glyphicon-road"></i>
            <label>Address *</label>
            <input type="text" ref="address" className="form-control" placeholder="221B Baker Steet" required/>
          </div>
          <div className="form-group row">
            <i className="glyphicon glyphicon-home"></i>
            <label>City *</label>
            <input type="text" ref="city" className="form-control" placeholder="London" required/>
          </div>
          <div className="form-group row">
            <i className="glyphicon glyphicon-globe"></i>
            <label>Country *</label>
            <input type="text" ref="country" className="form-control" placeholder="England" required/>
          </div>
          <input type="submit" value="Submit" className="btn btn-default" />
        </form>
      </div>
    );
  }
}

/* Validation */
AddPerson.propTypes = {
  group: React.PropTypes.array,
  addPerson: React.PropTypes.func
}

export default AddPerson;
