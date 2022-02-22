import React from 'react';
import Event from './Event';
import NewEventForm from './NewEventForm';

function HOC(WrappedComponent, selectData) {
  return class extends React.Component {
    render() {
      return <WrappedComponent />;
    }
  };
}

export default HOC;
