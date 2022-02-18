import React from 'react';

class EventListHeader extends React.Component {
  render() {
    const { addNewClick, showForm, showAllEvents } = this.props;
    return (
      <div>
        {showAllEvents ? (
          <header className="button-header">
            <button onClick={addNewClick} id="add-new-btn">
              {!showForm ? 'Add New' : 'Close'}
            </button>
          </header>
        ) : (
          <div></div>
        )}
        <section className="event-table">
          <ul className="event-table__header">
            <li>Event name</li>
            <li>Start date</li>
            <li>End date</li>
            <li>Actions</li>
          </ul>
        </section>
      </div>
    );
  }
}

export default EventListHeader;
