import React from 'react';
import axios from 'axios';

import EventListHeader from './EventListHeader';
import EventList from './EventList';
import { getEvents } from '../apirequests';

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
    getEvents().then((data) => {
      const events = data.data;

      this.setState({
        events,
      });
    });
  }

  addNewClick() {
    this.setState((prevState) => ({
      showForm: !prevState.showForm,
    }));
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
          editEvent={this.editEvent}
        />
      </main>
    );
  }
}

export default App;