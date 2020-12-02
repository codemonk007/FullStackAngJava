import React from 'react';
class Currency extends React.Component{
    render(){
        const codes=['INR','USD','CAD','GBP','EUR'];
        return (
            <select onChange={(ev)=>this.props.currencyChange(ev.target.value)}>
                {
                    codes.map((c)=><option key={c}>{c}</option>)
                }
            </select>
        )
    }
}
export default Currency;