// for functional component
// export default function App() {
//   return <h1>Hey There!!</h1>;
// }
// for class component
import React, { Component } from "react";
import Student1 from "./Student1";
import Student2 from "./Student2";
import Student3 from "./Student3";
export default class App extends Component {
  render() {
    return (
      <div>
        <Student1 />
        <Student2 />
        <Student3 name="Rohit" roll={102} />
      </div>
    );
  }
}
