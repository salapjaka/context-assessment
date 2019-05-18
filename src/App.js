import React from 'react';
import './App.css';

import { MyContext } from './context';

function A () {
    return (
      <MyContext.Consumer>
        {context => {
          return(
            <div className="component-A">
              <h1>Component A</h1>
                context/state in Component A => {context.x} <br />
                <B />
                <D />
            </div>
          )
        }}
      </MyContext.Consumer>
    );
}
function B () {
  return(
    <MyContext.Consumer>
      {context => {
        return (
          <div className="component-B">
            <h1>Component B</h1>
            context/state in Component B => {context.x} <br />
            <C />
          </div>
        );
      }}
    </MyContext.Consumer>
  )
    
  
}
function C (){
    return (
      <MyContext.Consumer>
        { context => {
          return(
            <div className="component-C">
              <h1>Component C</h1>
              context/state in Component C => {context.x} <br />
                <button onClick={context.onXClick}>{context.x}</button> onClick =>
                context.onXClick sets the state in context
            </div>
          )
        } }
      </MyContext.Consumer>
    );

}
function D () {

    return (
      <MyContext.Consumer>
      { context => {
        return(
          <div className="component-D">
            <h1>Component D</h1>
            context/state in Component D => {context.x} <br />
            <button onClick={context.onXClick}>{context.x}</button> onClick =>
            context.onXClick sets the state in context
          </div>
        )
      } } 
      </MyContext.Consumer>
    );
}


function App() {
  return (
    <div className="App">
      <A />
    </div>
  );
}

export default App;






