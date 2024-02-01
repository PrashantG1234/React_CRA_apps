// for functional component
// export default function App() {
//   return <h1>Hey There!!</h1>;
// }
// for class component
import React, { Component } from "react";
import Hello from "./Hello.js";
export default class App extends Component {
  render() {
    return (
      <div>
        <Hello />
      </div>
    );
  }
}
