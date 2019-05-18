import React from 'react';

// first we will make a new context
const MyContext = React.createContext();

class MyProvider extends React.Component{
    state = {
      x: 0
    }
    
    handleXClick = () => {
        this.setState({
          x: this.state.x + 1
        });
      }
    
    render() {
      return (
        <MyContext.Provider value={{
          ...this.state,
          onXClick: this.handleXClick
        }}>
          {this.props.children}
        </MyContext.Provider>
      );
    }
}

export { MyProvider, MyContext };