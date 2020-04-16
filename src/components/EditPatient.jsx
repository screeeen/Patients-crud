import React, { Component } from 'react'
import { withRouter } from "react-router-dom";

class EditPatient extends Component {
  constructor(props) {
    super(props);
    this.state = this.initialState;
  }

  initialState = this.props.location.state.patient;

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.editPatient(this.state);
    // this.setState(this.initialFormState)
    this.props.history.push('/');
  }


  handleInputChange(event) {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <>
      <form onSubmit={this.handleFormSubmit}>
        <div>
          <label>Name</label>
          <input type="text" required name="name" value={this.state.name} onChange={e => this.handleInputChange(e)} />
        </div>

        <div>
          <label>Surname</label>
          <input type="text" name="surname" value={this.state.surname} onChange={e => this.handleInputChange(e)} />
        </div>

        <div>
          <label>Age</label>
          <input type="number" name="age" value={this.state.age} onChange={e => this.handleInputChange(e)} />
        </div>
        <button>Done with Editing</button>
      </form>
      </>
    )
  }
}

export default withRouter(EditPatient)
