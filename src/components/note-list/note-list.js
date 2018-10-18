import React from 'react';
import PropTypes from 'prop-types';
import NoteItem from '../note-item/note-item';

class NoteList extends React.Component {
  constructor(props) {
    super(props);

    this.props = {
      title: '',
      body: '',
    };
  }

  render() {
    return (
      <div>
        <h3>To-Do List Items:</h3>
        {
          notes && notes.length > 0
            ? <ul>
              {
                notes.map((note) => {
                  return (
                    <NoteItem
                    key={note.id}
                    id={note.id}
                    handleRemoveNote={handleRemoveNote}
                    handdleUpdateNote={handleUpdateNote}
                    note={note}
                    />
                  );
                })
              }
            </ul> : <p>Your list is empty.</p>
        }
      </div>
    );
  }
}
NoteList.protoTypes.array = {
  notes: PropTypes.array,
  handleRemoveNote: PropTypes.func,
  handleUpdateNote: PropTypes.func,
};
