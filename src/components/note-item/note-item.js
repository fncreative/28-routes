import React from 'react';
import PropTypes from 'prop-types';
import NoteForm from '../note-form/note-form'; //eslint-disable-line

class NoteItem extends React.Component {
  render() {
    const { title, body } = this.props.note;
    return (
      <li>
        {title} : {body}
        <button onClick={this.props.handleRemoveNote.bind(null, this.props.note)}
        > Delete Note</button>
        <NoteForm notes={this.props.note}/>
      </li>
    );
  }
}
NoteItem.propTypes = {
  note: PropTypes.object,
  handleRemoveNote: PropTypes.func,
};

export default NoteItem;
