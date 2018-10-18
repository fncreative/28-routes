import React from 'react';
import NoteForm from "../note-form/note-form";
import uuid from 'uuid/v4';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.state.notes = [];
  }

  renderNotes = () => {
    return (
      <ul>
        {
          this.state.notes.map((currentNote) => {
            return <li key={currentNote.id}>
              {currentNote.title} : {currentNote.body}
            </li>
          })
        }
      </ul>
    );
  };

  handleAddNote = (note) => {
    note.createdOn = new Date();
    note.id = uuid();
    return this.setState((previousState) => {
      return {
        notes: [...previousState.notes, note],
      }
    });
  };

  render() {
    return (
      <section>
        <h2>Dashboard</h2>
        <p>Add New Note</p>
        <NoteForm handleAddNote={this.handleAddNote}/>
        <p>Here is a list of your notes:</p>
        {this.renderNotes()}
      </section>
    );
  }
}

export default Dashboard;
