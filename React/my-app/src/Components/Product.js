import React from 'react';
class Product extends React.Component{
     productStock(stock){
        if(stock){
            return <button>Add to Cart</button>
        }
        else{
            return <span>Out of order</span>
        }
    }
    render(){
        const {pData,selectedCode}=this.props;
        console.log(selectedCode);
        
        return(
            <div>
                <img src={pData.productImage} alt="no"/>
                <h1>{pData.productName}</h1>
                <h5>{pData.productPrice} {selectedCode}</h5>
               {this.productStock(pData.productStock)}
            </div>
        )
    }
}
export default Product;