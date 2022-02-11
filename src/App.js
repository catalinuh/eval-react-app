import React from 'react';
import EventListHeader from './EventListHeader';
import EventList from './EventList';

class App extends React.Component {
  render() {
    return (
      <main className="content">
        <EventListHeader />
        <EventList />
      </main>
    );
  }
}

export default App;
