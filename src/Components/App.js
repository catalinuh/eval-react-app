import React from 'react';
import axios from 'axios';

import EventListHeader from './EventListHeader';
import EventList from './EventList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
      showForm: false,
    };

    this.addNewClick = this.addNewClick.bind(this);
  }

  async componentDidMount() {
    this.getEvents();
  }

  async getEvents() {
    try {
      const response = await axios.get('http://localhost:4000/events');

      this.setState({
        events: response.data,
      });
    } catch (err) {
      console.log(err);
    }
  }

  addNewClick() {
    this.setState((prevState) => ({
      showForm: !prevState.showForm,
    }));
  }

  async deleteEvent(id) {
    try {
      await axios.delete(`http://localhost:4000/events/${id}`);
    } catch (err) {
      console.log(err);
    }
  }

  async editEvent(id, newEvent) {
    try {
      await axios.put(`http://localhost:4000/events/${id}`, newEvent);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <main className="content">
        <EventListHeader
          addNewClick={this.addNewClick}
          showForm={this.state.showForm}
        />
        <EventList
          events={this.state.events}
          showForm={this.state.showForm}
          addNewClick={this.addNewClick}
          deleteEvent={this.deleteEvent}
          editEvent={this.editEvent}
        />
      </main>
    );
  }
}

export default App;
