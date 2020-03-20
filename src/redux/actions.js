import {ADD_Bookings} from './actionTypes';

export const addbooking = (content, day) => ({
  type: ADD_Bookings,
  payload: {
    id: day,
    content,
  },
});
