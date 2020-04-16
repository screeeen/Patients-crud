import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import { now } from 'moment';
import {
  formatDate,
  parseDate,
} from 'react-day-picker/moment';


class AddPatient extends Component {
  constructor(props) {
    super(props);
    this.state = this.initialFormState
    this.handleDayChange = this.handleDayChange.bind(this);
  };


  initialFormState = {
    name: '',
    surname: '',
    age: undefined,
    birth: undefined,
    isEmpty: true,
    isDisabled: false,
  }


  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.addNewPatient(this.state);
    this.setState(this.initialFormState)
    this.props.history.push('/');
  }

  calculateAge(dob){
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
    const age = Math.abs(age_dt.getUTCFullYear() - 1970);
    this.setState({age});
  }

  handleInputChange(event) {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  handleDayChange(birth, modifiers, dayPickerInput) {
    const input = dayPickerInput.getInput();
    this.setState({
      birth,
      isEmpty: !input.value.trim(),
      isDisabled: modifiers.disabled === true,
    });
    this.calculateAge (birth);
  }




  render() {
    const { birth, isDisabled, isEmpty } = this.state;

    return (
      <form onSubmit={this.handleFormSubmit}>
        <div>
          <label>Name</label>
          <input type="text" required name="name" value={this.state.name} onChange={e => this.handleInputChange(e)} />
        </div>

        <div>
          <label>Surname</label>
          <input type="text" name="surname" value={this.state.surname} onChange={e => this.handleInputChange(e)} />
        </div>

        {/* <div>
          <label>Age</label>
          <input type="number" name="age" value={this.state.age} onChange={e => this.handleInputChange(e)} />
        </div> */}

        <div>
          <p>
            {isEmpty && 'Birthday:'}
            {!isEmpty && !birth && 'This day is invalid'}
            {birth && isDisabled && 'This day is disabled'}
            {birth &&
              !isDisabled &&
              `You chose ${birth.toLocaleDateString()}`}
          </p>
          <DayPickerInput
            formatDate={formatDate}
            parseDate={parseDate}
            placeholder={`${formatDate(new Date())}`}
            value={birth}
            onDayChange={this.handleDayChange}
            dayPickerProps={{
              initialMonth: new Date(2001, 1),
              selectedDays: birth,
              disabledDays: {
                after: new Date(now), // substract 18 years
              },
            }}
          />
        </div>
        <button>Done</button>
      </form >
    )
  }
}

export default withRouter(AddPatient) 