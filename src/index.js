import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends React.Component {
  state = { counter: 0 };

  incrementConter = (incrementValue) => {
    this.setState(prevState => ({
      counter: prevState.counter + incrementValue
    }));
  };

  render() {
    return (
      <div>
        <ButtonClass incrementValue={1} onClickFunction={this.incrementConter} />
        <ButtonClass incrementValue={5} onClickFunction={this.incrementConter} />
        <ButtonClass incrementValue={10} onClickFunction={this.incrementConter} />
        <ButtonClass incrementValue={100} onClickFunction={this.incrementConter} />
        <Result counter={this.state.counter} />
      </div>
    );
  }
}

const Result = props => {
  return <div>{props.counter}</div>;
};
// //Example to function component (stateless)
// const Button = (props) => {
//   return (
//       <button>GO</button>
//   );
// };

// render(<Button />, document.getElementById('root'));

//Example to class component (statefull)
class ButtonClass extends React.Component {
  handleClick = () => {
    this.props.onClickFunction(this.props.incrementValue)
  };

  //Better way in order to avoid race condition
  // handleClick = () => {
  //   this.setState(prevState => ({
  //     counter: prevState.counter + 1
  //   }));
  // };

  render() {
    return (
    <button
       onClick={this.handleClick}>
       +{this.props.incrementValue}
    </button>
    )};
}
render(<App />, document.getElementById("root"));
