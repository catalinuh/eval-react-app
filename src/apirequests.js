import axios from 'axios';

export const getEvents = async () => {
  try {
    return await axios.get('http://localhost:4000/events');
  } catch (err) {
    console.log(err);
  }
};

export const deleteEvent = async (id) => {
  try {
    return await axios.delete(`http://localhost:4000/events/${id}`);
  } catch (err) {
    console.log(err);
  }
};

export const saveEvent = async (id, newEvent) => {
  try {
    return await axios.put(`http://localhost:4000/events/${id}`, newEvent);
  } catch (err) {
    console.log(err);
  }
};
