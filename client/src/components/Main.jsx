import React, { Component } from 'react';
import { Route } from 'react-router-dom';

export default class Main extends Component {


  render() {
    return (
      <main>
        <Route path='/user/signin' render={() => (

          <></>

        )} />

      </main>
    )
  }
}
