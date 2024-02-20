import React, { Component } from 'react';
import { Stepper } from 'react-form-stepper';
import './App.css';
import FirstStep from './TypeOfWebsiteForm';
class Summary extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {

    return (
      <div className='form'>
        <div>
          <Stepper
            steps={[{ label: '' }, { label: '' }, { label: '' },{ label: '' }]}
            activeStep={2}
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
          < FirstStep />
         

          <div className='buttons'>
            <button className='buttons__button buttons__button--back' onClick={this.back}>Back</button>
            <button className='buttons__button buttons__button--next' type='submit' onClick={this.back}>Back</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Summary;