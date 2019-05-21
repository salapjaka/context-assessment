import React from 'react';
import './App.css';

const MyContext=React.createContext();

class MyProvider extends React.Component{
  state = {
    x: 0
  };
  render(){
    return(
      <MyContext.Provider value={{
        state:this.state,
        handleXClick: () => this.setState({
        x: this.state.x + 1
    })
  }}>

  {this.props.children}
      </MyContext.Provider>
    )
  }
}
class A extends React.Component {
   
  render() {
    return (
    <div className="component-A">
      <MyContext.Consumer>
          {(context)=>(
           <React.Fragment>
            <h1>Component A</h1>
                The state in the component A is {context.state.x} <br />
                context.handleXClick will set the state to a new value => {"this.setState({x: this.state.x + 1})"} <br />
                <B/>
                <D/>
            </React.Fragment>
          )}
      </MyContext.Consumer>
    </div>  
    );
  }
}
class B extends React.Component {
  render() {
    return (     
    <div className="component-B">
      <MyContext.Consumer>
        {(context)=>(
         <React.Fragment>
          <h1>Component B</h1>
            this.props.x = {context.state.x} <br />
            this.props.onXClick => (method from component A) <br />
          <C/>
        </React.Fragment>
        )}
      </MyContext.Consumer>
    </div>
    
     
    );
  }
}

class C extends React.Component {
  render() {
    return (
      <div className="component-C">
      <MyContext.Consumer>
        {(context)=>(
          <React.Fragment>
            <h1>Component C</h1>
              this.props.x = {context.state.x} <br />
              this.props.onXClick => (method passed from component B) <br />
            <button onClick={context.handleXClick}>{context.state.x}</button> onClick =>
              this.props.onXClick
          </React.Fragment>
        )}
      </MyContext.Consumer>
      </div>
    );
  }
}


class D extends React.Component {
  render() {
    return (
      
      <div className="component-D">
      <MyContext.Consumer>
        {(context)=>(
          <React.Fragment>
            <h1>Component D</h1>
              this.props.x = {context.state.x} <br />
              this.props.onXClick => (method from component A) <br />
            <button onClick={context.handleXClick}>{context.state.x}</button> onClick =>
              this.props.onXClick
          </React.Fragment>
        )}
      </MyContext.Consumer>
      </div> 
    );
  }
}


function App() {
  return (
    <MyProvider>
    <div className="App">
      <A />
    </div>
    </MyProvider>
  );
}

export default App;






