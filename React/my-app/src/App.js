import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Demo from './demo/Demo'
import ProductList from './Containers/ProductList'
import Currency from './Components/Currency'
import Checkout from './Containers/Checkout'
class App extends Component {
  state ={ selectedCurrency:"INR"};
  render() {
     let selectedCurrency = this.state.selectedCurrency;
    return (
      <div className="App">
        
        <Currency currencyChange ={(code)=>{
          this.setState({...this.state,selectedCurrency:code})
          console.log("APP code",selectedCurrency)
        }
        }></Currency>
        <Checkout></Checkout>
        <Demo></Demo>
        <ProductList currencyCode={selectedCurrency}></ProductList>
      </div>
    );
  }
}
export default App;


