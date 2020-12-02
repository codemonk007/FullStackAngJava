import React from 'react';
// class Demo extends React.Component{
//     render(){
//         let temp = "Tuesday"
//         return(<div>
//             <h1>Demo component</h1>
//             <h1>Day - {temp}</h1>
//             <h1>year - {2019+1}</h1>
//         </div>)
//     }
// }
class Demo extends React.PureComponent {
    state = { no: 0, count:1 };
    shouldComponentUpdate(nextProps, nextState) {
        console.log("HOOK CALLED", nextProps, nextState);
        return this.state.no !== nextState.no || nextState.count === 6; // boolean
      }
    render() {
      console.log("RENDER CALLED", this.state);
      const name = "mike";
      return (
        <div>
          <h1>Demo Component</h1>
          <p>Some html content</p>
          <p>hello from {name}</p>
          <p>{9 + 8}</p>
          <button onClick={() => this.setState({ no: 1 })}>Change to 1</button>
          <button onClick={() => this.setState({ no: 0 })}>Change to 0</button>
          <button
          onClick={() =>
            this.setState((prevState) => {
              return { count: prevState.count + 1 };
            })
          }
        >
          Increment count
        </button>
        </div>
      );
    }
  }
export default Demo;