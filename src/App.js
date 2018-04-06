import React, { Component } from "react";
import "./App.css";

import tree from "./familytree";

import { enrichTree, sortPeopleFamilyStyle } from "./familytreeManager";

const PersonComponentStyle = {
  border: "1px solid gray",
  margin: "1em",
  width: "15em"
};

const PersonComponent = ({person}) => (
  <section id={`person-section-${person.id}`} style={PersonComponentStyle}>
    <ul>
      <li>{person.firstnames.join(" ")} {person.lastname}</li>
      <li>{person.birthdate} {person.deathdate}</li>
    </ul>
  </section>);

class App extends Component {

  state = {
    treeView: sortPeopleFamilyStyle(enrichTree(tree)),
    // treeView: enrichTree(tree),
  };

  // {this.state.treeView.people.map(person => person.firstnames.join(" "))};
  // {this.state.treeView.people.map(person => <PersonComponent person={person} />)};
  // console.log(this.state.treeView.people[0]);
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Functional programming with genealogy data</h1>
        </header>
        <article className="App-intro">
          {this.state.treeView.people.map(person => <PersonComponent person={person} key={person.id} />)}
        </article>
      </div>
    );
  }
}

export default App;
