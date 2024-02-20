import React, { Component } from 'react';
import { Stepper } from 'react-form-stepper';
import './App.css';
import FirstStep from "./TypeOfWebsiteForm"

class YourIndustry extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep(); 
    // const isFirstNameValid = this.props.validateFirstName();
    // const isLastNameValid = this.props.validateLastName();
    // if (isFirstNameValid && isLastNameValid) {
    //   this.props.nextStep();
    // }
  }

  render() {
    // const { 
    //   firstname, 
    //   lastname, 
    //   email, 
    //   phone, 
    //   handleChange, 
    //   validateFirstName,
    //   validateLastName,
    //   isErrorFirstName,
    //   isErrorLastName,
    //   errorMessageFirstName,
    //   errorMessageLastName
    // } = this.props;

    return (
      <div className='form'>
        <form>

          <Stepper
            steps={[{ label: '' },{ label: '' }, { label: '' }, { label: '' }]}
            activeStep={3}
            styleConfig={{
              activeBgColor: '#2B459B',
              activeTextColor: '#fff',
              inactiveBgColor: '#fff',
              inactiveTextColor: '#2b7cff',
              completedBgColor: '#407B24',
              completedTextColor: '#fff',
              size: '1em'
            }}
            className={'stepper'}
            stepClassName={'stepper__step'}
          />

          <FirstStep />
            
          <div style={{textAlign: 'center'}}>
            <button className='buttons__button buttons__button--next' onClick={this.continue}>Next</button>
            
          </div>

        </form>
      </div>
    )
  }
}

export default YourIndustry;