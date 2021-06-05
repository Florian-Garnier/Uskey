import './App.css';
import React from 'react';

class Exo extends React.Component {
  constructor (props) {
    super(props);
    this.state =
    {
      array : Array(0)
    };
  }

  new_box(name) {
    return (
    <div className="box" style={{width: ((name === "Utilisateur :" ? 14.5 : 13.25) + '%')}}><p className="box-text">{name}<input></input></p></div>
    );
  }

  add_object() {
    this.setState({array: [...this.state.array, this.new_box("Object :")]});
  }

  add_user() {
    this.setState({array: [...this.state.array, this.new_box("Utilisateur :")]});
  }

  render() {
    return (
      <div>
        <div className="header">
          <h1>Exercice entretien de stage</h1>
          <button className="add"
          onClick={() => this.add_object()}
          >Ajouter un objet</button>
          <button className="add"
          onClick={() => this.add_user()}
          >Ajouter un utilisateur</button>
          <p className="list">Liste :</p>
          </div>
          {this.state.array}
      </div>
    );
  }
}

function App() {
  return <Exo />;
}

export default App;
