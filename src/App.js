import React from 'react';
import './App.css';
import OutputComponent from './components/OutputComponent';
import ButtonsComponent from "./components/ButtonsComponent";

export default class App extends React.Component {
  
  constructor(){
    super();

    this.state = {
      result: ""
    }
  }

  onClick = button => {
    if(button === "="){
      this.calculate()
    }
    else if(button === "AC"){
      this.setState({
        result: ""
      })
    }
    else {
      this.setState({
        result: this.state.result + button
      })
    }
  };

  calculate = () => {
    var checkResult = ''
    if(this.state.result.includes('--')){
      checkResult = this.state.result.replace('--','+')
    }
    else {
      checkResult = this.state.result
    }

    try {
      this.setState({
          // eslint-disable-next-line
          result: (eval(checkResult) || "" ) + ""
      })
    } catch (e) {
      this.setState({
        result: "error"
      })
    }
  };

  render(){
    return (
      <div>
        <div className="calculator">
          <OutputComponent result={this.state.result}/>
          <ButtonsComponent onClick={this.onClick}/>
        </div>
      </div>
    );
  }
}