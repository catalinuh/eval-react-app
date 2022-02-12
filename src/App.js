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
    const response = await axios.get('http://localhost:4000/events');

    this.setState({
      events: response.data,
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
        />
      </main>
    );
  }
}

export default App;
