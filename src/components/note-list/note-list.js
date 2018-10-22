import React from 'react';
import PropTypes from 'prop-types';
import NoteItem from '../note-item/note-item';

class NoteList extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <ul>
        {
          this.props.notes.map((currentNote) => {
            return <NoteItem
              key = {currentNote.id}
              currentNote = {currentNote}
              handleRemoveNote = {this.props.handleRemoveNote}
              handleComplete = {this.props.handleComplete}
            />;
          })
        }
      </ul>
    );
  }
}

NoteList.propTypes = {
  notes: PropTypes.object,
  handleRemoveNote: PropTypes.func,
  handleComplete: PropTypes.func,
};

export default NoteList;
