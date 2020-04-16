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
import { faUser,faCheck, faUserEdit } from '@fortawesome/free-solid-svg-icons'


class EditPatient extends Component {
  constructor(props) {
    super(props);
    this.state = this.initialState;
    this.handleDayChange = this.handleDayChange.bind(this);

  }

  initialState = this.props.location.state.patient;

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.editPatient(this.state);
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
    const { birth, isDisabled, isEmpty } = this.state;
    return (
      <>
        <h3>Editing <span>{this.state.name} {this.state.surname}</span></h3>
        <form onSubmit={this.handleFormSubmit}>

        <p><FontAwesomeIcon icon={faUserEdit} color='slategrey' /></p>
          <div className="input-box">
            <input type="text" required name="name" value={this.state.name} onChange={e => this.handleInputChange(e)} />
          </div>

          <div className="input-box">
            <input type="text" required name="surname" value={this.state.surname} onChange={e => this.handleInputChange(e)} />
          </div>

          <div className="input-box">
              {isEmpty && 'Edit birthday'}
              {!isEmpty && !birth && 'This day is invalid'}
              {birth && isDisabled && 'This day is disabled'}
              {/* {birth &&
                !isDisabled &&
                `You chose ${birth.toLocaleDateString()}`} */}

            <DayPickerInput
              formatDate={formatDate}
              parseDate={parseDate}
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
          <button className="end-form"><p><FontAwesomeIcon icon={faCheck} size='lg'/></p></button>
        </form>
      </>
    )
  }
}

export default withRouter(EditPatient)
