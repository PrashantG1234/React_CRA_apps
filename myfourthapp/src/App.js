// for functional component
// export default function App() {
//   return <h1>Hey There!!</h1>;
// }
// for class component
import React, { Component } from "react";
import MySelf from "./MySelf";
export default class App extends Component {
  render() {
    return (
      <div>
        <MySelf />
      </div>
    );
  }
}
