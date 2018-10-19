import React from 'react';
import NoteForm from "../note-form/note-form";
import uuid from 'uuid/v4';
import NoteItem from '../note-item/note-item';

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
            return <NoteItem
              note={currentNote}
              handleRemoveNote = {this.handleRemoveNote}
              />
          })
        }
      </ul>
    );
  };

  handleRemoveNote = (noteToRemove) => {
    this.setState((previousState) => ({
      notes: previousState.notes.filter(currentNote => currentNote.id !== noteToRemove.id),
    }));
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
        <NoteForm handleComplete={this.handleAddNote}/>
        <p>Here is a list of your notes:</p>
        {this.renderNotes()}
      </section>
    );
  }
}

export default Dashboard;
