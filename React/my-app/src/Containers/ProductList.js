import React from 'react';
import Product from './../Components/Product'
import axios from 'axios';
import { get } from 'http';
class ProductList extends React.Component{
    state = {pList:[]}
    componentDidMount(){
        this.getData();
    }
    getData(){  
        const endPoint='https://raw.githubusercontent.com/mdmoin7/Random-Products-Json-Generator/master/products.json'
        axios.get(endPoint).
        then((res)=>{
            console.log("res",res.data);
            this.setState({pList:res.data})
            
        }).catch((er)=>{
            console.log("Error",er);        
        });
    }
    render(){
             
        return (
           <div>
               {this.state.pList.map(p=>
               <Product selectedCode = {this.props.currencyCode} key ={p.productId} pData={p}/>
               )}
           </div>
        )
    }
}
export default ProductList;
