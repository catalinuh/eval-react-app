import React from 'react';

import EventListHeader from './EventListHeader';
import EventList from './EventList';
import Navigation from './Navigation';
import UpcomingEvents from './UpcomingEvents';
import { getEvents } from '../apirequests';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
      showForm: false,
      showAllEvents: true,
      showUpcomingEvents: false,
    };

    this.addNewClick = this.addNewClick.bind(this);
    this.clickLink = this.clickLink.bind(this);
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

  clickLink(e) {
    if (e.target.id === 'home') {
      this.setState({ showAllEvents: true, showUpcomingEvents: false });
    } else if (e.target.id === 'upcoming-events') {
      this.setState({ showAllEvents: false, showUpcomingEvents: true });
    }
  }

  render() {
    return (
      <main className="content">
        <Navigation clickLink={this.clickLink} />
        <EventListHeader
          addNewClick={this.addNewClick}
          showForm={this.state.showForm}
          showAllEvents={this.state.showAllEvents}
        />
        {this.state.showAllEvents ? (
          <EventList
            events={this.state.events}
            showForm={this.state.showForm}
            addNewClick={this.addNewClick}
            editEvent={this.editEvent}
          />
        ) : (
          <UpcomingEvents events={this.state.events} />
        )}
      </main>
    );
  }
}

export default App;
