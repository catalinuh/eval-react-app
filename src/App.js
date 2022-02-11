import React from 'react';

class App extends React.Component {
  render() {
    return (
      <main className="content">
        <header className="button-header">
          <button id="add-new-btn">Add New</button>
        </header>
        <section className="event-table">
          <ul className="event-table__header">
            <li>Event name</li>
            <li>Start date</li>
            <li>End date</li>
            <li>Actions</li>
          </ul>
        </section>
        <section id="event-list__container">
          <div className="event">
            <input
              className="event-field"
              type="text"
              aria-label="Event name"
            />
            <input
              className="start-field"
              type="date"
              aria-label="Start date"
            />
            <input className="end-field" type="date" aria-label="End date" />
            <div id="edit-delete">
              <button className="edit-btn">Edit</button>
              <button className="delete-btn">Delete</button>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default App;
