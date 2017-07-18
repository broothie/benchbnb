import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route } from 'react-router-dom';
import SessionFormContainer from './session/session_form_container';

export default () => (
  <div>
    <header>
      <h1>Bench BnB</h1>
      <GreetingContainer/>
    </header>

    <Route path='/signin' component={SessionFormContainer}/>
    <Route path='/signup' component={SessionFormContainer}/>
  </div>
);
