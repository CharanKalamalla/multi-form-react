import Styled from "styled-components"
import React, { Component } from 'react';
// import Form from './Form';
import UpperSection from "./AllForms/UpperSection"

class App extends Component {

  render() {

    return (
      <Main className='main-container'>
        <UpperSection/>
      </Main>
    );
  }
}

export default App;
const Main = Styled.div`

`
