import React from 'react';
import Route from 'react-router-dom';
import ProductList from './Containers/ProductList'
import Demo from './demo/Demo'
function AppRouter(props){

    return ( <div>
        <Route path={"/"} component ={Demo}></Route>
        <Route path={"/products"} component ={ProductList}></Route>
    </div>);
}