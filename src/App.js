import React, { Component } from "react";
import "./App.css";

import tree from "./familytree";

import { enrichTree } from "./familytreeManager";

const PersonComponentStyle = {
  border: "1px solid gray",
  margin: "1em",
  width: "15em"
};

const FamilyComponentStyle = {
  border: "1px solid gray",
  margin: "1em",
  width: "25em"
};

const PersonComponent = ({person}) => (
  <section id={`person-section-${person.id}`} style={PersonComponentStyle}>
    <ul>
      <li>{person.firstnames.join(" ")} {person.lastname}</li>
      <li>{person.birthdate} {person.deathdate}</li>
    </ul>
  </section>);

const FamilyComponent = ({family}) => (
  <section id={`family-section-${family.id}`} style={FamilyComponentStyle}>
    <ul>
      <li>{family.father.firstnames.join(" ")} {family.father.lastname} AND {family.mother.firstnames.join(" ")} {family.mother.lastname}</li>
      <li>{family.children.map(person => <PersonComponent person={person} key={person.id} />)}</li>
    </ul>
  </section>);

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      treeView: enrichTree(tree),
    }
  }

  // {this.state.treeView.people.map(person => <PersonComponent person={person} key={person.id} />)}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Functional programming with genealogy data</h1>
        </header>
        <article className="App-intro">
          {this.state.treeView.families.map((family, key) => <FamilyComponent family={family} key={family.id} />)}
        </article>
      </div>
    );
  }
}

export default App;
