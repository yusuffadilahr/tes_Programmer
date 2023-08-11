import React, { Component } from 'react';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      num1: '',
      num2: '',
      operator: '+',
      result: '',
    };
  }

  handleInputChange = (event, field) => {
    this.setState({
      [field]: event.target.value,
    });
  };

  calculate = () => {
    const { num1, num2, operator } = this.state;

    let result = 0;
    switch (operator) {
      case '+':
        result = parseFloat(num1) + parseFloat(num2);
        break;
      case '-':
        result = parseFloat(num1) - parseFloat(num2);
        break;
      case '*':
        result = parseFloat(num1) * parseFloat(num2);
        break;
      case '/':
        result = parseFloat(num1) / parseFloat(num2);
        break;
      default:
        break;
    }

    this.setState({
      result,
    });
  };

  render() {
    const { num1, num2, operator, result } = this.state;

    return (
      <div className='container'>
        <h2>Simple Calculator (OOP)</h2>
        <input type="number" value={num1} onChange={(e) => this.handleInputChange(e, 'num1')} />
        <select value={operator} onChange={(e) => this.handleInputChange(e, 'operator')}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input type="number" value={num2} onChange={(e) => this.handleInputChange(e, 'num2')} />
        <button onClick={this.calculate}>=</button>
        <span>{result}</span>
      </div>
    );
  }
}

export default Calculator;