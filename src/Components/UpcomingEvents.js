import React from 'react';
import Event from './Event';

class UpcomingEvents extends React.Component {
  dateConversion(timestamp) {
    let date = new Date(parseInt(timestamp));

    let year = date.getFullYear();
    let month =
      date.getMonth() + 1 < 10
        ? '0' + (date.getMonth() + 1)
        : date.getMonth() + 1;
    let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    let newDate = [year, month, day].join('-');

    return newDate;
  }

  render() {
    let today = new Date();
    const { events } = this.props;
    const upcomingEvents = events.filter(
      (event) => +event.startDate > today.getTime()
    );
    const upcomingEventsList = upcomingEvents.map((event) => {
      const startDate = this.dateConversion(event.startDate);
      const endDate = this.dateConversion(event.endDate);

      return (
        <Event
          key={event.id}
          eventName={event.eventName}
          startDate={startDate}
          endDate={endDate}
          id={event.id}
        />
      );
    });

    return <section id="event-list__container">{upcomingEventsList}</section>;
  }
}

export default UpcomingEvents;
