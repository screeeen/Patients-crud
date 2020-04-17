import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import PatientsList from './components/PatientsList'

it('list is displayed', () => {
const list = (<PatientsList />)

  expect(list).toMatchSnapshot();
});

it('list displays message if is empty', () => {
  // const list = (<PatientsList />)
  // expect(user.age).
});


it('user cant be less than 0 years old', () => {
  const user = {
    id: Math.floor(Math.random() * 20),
    name: 'LeBron James',
    surname :'paqueton',
    age:2,
    birth:new Date()
  };
  expect(user.age).toBeGreaterThan(0);
});


