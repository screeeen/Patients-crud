import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { now } from 'moment';
import 'react-day-picker/lib/style.css';
import {
  formatDate,
  parseDate,
} from 'react-day-picker/moment';
import '../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faCheck } from '@fortawesome/free-solid-svg-icons'


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

  calculateAge(dob) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);
    const age = Math.abs(age_dt.getUTCFullYear() - 1970);
    this.setState({ age });
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
    birth && this.calculateAge(birth);
  }




  render() {
    const { birth } = this.state;

    return (
      <>
        <h3>Register a new patient</h3>
        <form onSubmit={this.handleFormSubmit}>

          <p><FontAwesomeIcon icon={faUser} color='slategrey' /></p>
          <div className="input-box">
            <input type="text" required name="name" placeholder="Enter patients name..." value={this.state.name} onChange={e => this.handleInputChange(e)} />
          </div>

          <div className="input-box">
            <input type="text" required name="surname" placeholder="...surname" value={this.state.surname} onChange={e => this.handleInputChange(e)} />
          </div>

          <div className="input-box">
      
            <DayPickerInput
              formatDate={formatDate}
              parseDate={parseDate}
              placeholder={'Pick a Date'}
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
            {/* <FontAwesomeIcon icon={faCalendarAlt} size='sm'/> */}
          </div>
            <button className="end-form"><p><FontAwesomeIcon icon={faCheck} size='lg'/></p></button>
        </form >
      </>
    )
  }
}

export default withRouter(AddPatient) 