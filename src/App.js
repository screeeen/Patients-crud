import React, { Component } from 'react';


class App extends Component {

  constructor() {
    super();
    this.state = {
      id: null,
      userId: 0,
      name: '',
      surname: '',
      age: new Date(),
      patient: {},
      patientList: [],
      editing:false
    }

    //binds

  }

  addNewPatient (event) {

  }

  deletePatient (id) {

  }

  editPatient (patient){

  }

  setEditingFlag (value) {

  }


  updatePatientDetails (event) {

  }


  render() {

    // destructuring 
    return (
      <>
        <header >
          <p>hola</p>
        </header>
      </>
    );
  }
}

export default App;
