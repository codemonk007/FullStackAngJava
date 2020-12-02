import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Currency from './Components/Currency'
import Checkout from './Containers/Checkout'
import AppRouter from './AppRouter'
import {BrowserRouter} from 'react-router-dom';
class App extends Component {
  state ={ selectedCurrency:"INR"};
  render() {
     let selectedCurrency = this.state.selectedCurrency;
    return (
      <div className="App">
        <BrowserRouter>
        <Currency currencyChange ={(code)=>{
          this.setState({...this.state,selectedCurrency:code})
          console.log("APP code",selectedCurrency)
        }
        }></Currency>
        <AppRouter/>

        </BrowserRouter>
      </div>
    );
  }
}
export default App;


