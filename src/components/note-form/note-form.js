import React from 'react';
import Dashboard from '../dashboard/dashboard';
import PropTypes from 'prop-types';

class NoteForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    };
  }
  handleChanges = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleAddNote(this.state);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="enter a title"
          value={this.state.title}
          onChange={this.handleChanges}
          />
        <input
          type="text"
          name="body"
          placeholder="enter your note here"
          onChange={this.handleChanges}
          />
        <button type="submit">Create Note</button>
      </form>
    );
  }
}
NoteForm.propTypes = {
  handleNoteForm : PropTypes.func,
};

export default NoteForm;
