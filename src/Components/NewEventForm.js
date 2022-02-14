import React from 'react';
import axios from 'axios';

class NewEventForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      eventName: '',
      startDate: '',
      endDate: '',
      disabled: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();

    await this.setState({
      eventName: this.state.eventName,
      startDate: '' + new Date(this.state.startDate).getTime(),
      endDate: '' + new Date(this.state.endDate).getTime(),
    });

    try {
      await axios.post('http://localhost:4000/events', {
        eventName: this.state.eventName,
        startDate: this.state.startDate,
        endDate: this.state.endDate,
      });

      this.setState({
        eventName: '',
        startDate: '',
        endDate: '',
        disabled: true,
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    if (!this.props.show) return null;

    return (
      <div className="event">
        <input
          onChange={this.handleChange}
          name="eventName"
          className="event-field"
          type="text"
          aria-label="Event name"
          disabled={this.state.disabled}
        />
        <input
          onChange={this.handleChange}
          name="startDate"
          className="start-field"
          type="date"
          aria-label="Start date"
          disabled={this.state.disabled}
        />
        <input
          onChange={this.handleChange}
          name="endDate"
          className="end-field"
          type="date"
          aria-label="End date"
          disabled={this.state.disabled}
        />
        <div id="edit-delete">
          <button
            onClick={this.handleSubmit}
            className="save-btn"
            type="submit"
          >
            Save
          </button>
          <button onClick={this.props.addNewClick} className="close-btn">
            Close
          </button>
        </div>
      </div>
    );
  }
}

export default NewEventForm;
