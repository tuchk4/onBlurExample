import React, { Component } from 'react';
import { compose, mapProps, withProps, withHandlers } from 'recompose';

import './App.css';

import RenderComponentList from './RenderComponentList';

const ButtonBoth = ({ children }) => {
  return <button onBlur={() => {}} onFocus={() => {}}>{children}</button>;
};

const ButtonFocus = ({ children }) => {
  return <button onFocus={() => {}}>{children}</button>;
};

const ButtonBlur = ({ children }) => {
  return <button onBlur={() => {}}>{children}</button>;
};

const componentsMap = {
  focus: ButtonFocus,
  blur: ButtonBlur,
  both: ButtonBoth
};

class App extends Component {
  state = {
    type: null
  };

  render() {
    const start = (type) => {
      this.setState({ type });
    }

    const renderButtons = () => {
      return (
        <span>
          <button onClick={start.bind(null, 'focus')}>FOCUS</button>
          <button onClick={start.bind(null, 'blur')}>BLUR</button>
          <button onClick={start.bind(null, 'both')}>BOTH</button>
        </span>
      )
    };

    const renderClearButton = () => {
      return (
        <button onClick={start.bind(null, null)}>Clear</button>
      );
    };

    const component = componentsMap[this.state.type];

    return (
      <div className='App'>
        <div className='App-header'>
          <h2>Welcome to React</h2>
          { !this.state.type ? renderButtons() : renderClearButton() }
        </div>
        {
          !this.state.type ? null : (
            <div className='App-intro'>
              <RenderComponentList
                componentProps={{
                  children: 'Hello'
                }}
                component={component} />
            </div>
          )
        }
      </div>
    );
  }
}

export default App;
