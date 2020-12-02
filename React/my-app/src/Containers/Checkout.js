import React from "react";
class Checkout extends React.Component {
  state ={name:''}
    submitData(e) {
        e.preventDefault(); // cancels the default behavior
        console.log("form submission", this.state, this.emailRef.value);
      }
    
  render() {
    return (
        <form onSubmit={(ev) => this.submitData(ev)}>
        <label>Name</label>
        {/* CONTROLLED COMPONENT */}
        <input
          type="text"
          onBlur={(e) => this.setState({ name: e.target.value })}
        />
        {this.state.name === "" ? <p>name is required</p> : null}
        <label>Email</label>
        {/* UNCONTROLLED COMPONENT */}
        <input type="text" ref={(r) => (this.emailRef = r)} />
        {this.emailRef && this.emailRef.value === "" ? (
          <p>email is required</p>
        ) : null}
        <button>Submit</button>
      </form>
    );
  }
}
export default Checkout;
