import {ADD_Bookings} from '../actionTypes';

const initialState = {
  day: '',
  booking_data: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_Bookings: {
      const {id, content} = action.payload;
      const {name, start_time, endtime, User, gender, sport, city} = content;
      return {
        ...state,
        day: [...state.day, id],
        booking_data: {
          ...state.booking_data,
          [id]: [
            {
              name,
              start_time,
              endtime,
              User,
              gender,
              sport,
              city,
            },
          ],
        },
      };
    }
    default:
      return state;
  }
}
