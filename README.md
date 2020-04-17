# Patients crud 

### [View the demo](https://screeeen.github.io/Patients-crud/)

### Comments

### component list

*[x] App with routes and basic navigation
*[] MockData with a patients json
*[] PatientsList displays a list of cells
*[] AddPatient form to register a new patient
*[] EditPatient form to edit a patient
*[] CalculateAge utility 

#### Things I did
*[x] App 
  * Routes and basic navigation
*[] MockData
  *  patients JSON
*[] PatientsList
  *  displays a list of cells
*[] AddPatient
  *  form to register a new patient
*[] EditPatient 
  * form to edit a patient, receives user data as a prop, populates the form fields and onSubmit wrap the state data and lift it to the App state where the array of patients lives.
*[] CalculateAge utility 
  *  given a date, calculates the patients age

#### Libraries

* react-router
  * for the pages, as required in the brief
* react-day-picker
  * used for the date picker input 
* moment
  * used to display date in a comfy way
* fontawesome
  * provides some icons for better ux
* styled-components
  * wanted to set it up, not sure if I will have the time...

#### Things I wanted to do

* Conherent Tests
* Responsive design
* a Proper design framework 
* Modal to confirm deletion, editing etc...
* A better UI format on birthday picker
* More feedback to the user
* Refactoring of repeated code


### `npm start` to run

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm start` to run


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

