import React from 'react';
import PropTypes from 'prop-types';

class NoteForm extends React.Component {
  constructor(props) {
    super(props);

    const emptyState = {
      title: '',
      body: '',
    };

    this.state = this.props.note ? this.props.note : emptyState;
  }

  handleChanges = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleComplete(this.state);
  };
  render() {
    const buttonText = this.props.note ? 'Update' : 'Create';
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
        <button type="submit">{buttonText}</button>
      </form>
    );
  }
}
NoteForm.propTypes = {
  note: PropTypes.object,
  handleAddNote : PropTypes.func,
};

export default NoteForm;
