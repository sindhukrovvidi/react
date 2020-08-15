
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';


//initial configuration of the state
export const initialState = {
    dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
}

//Reducer function receives current state and action
export const Reducer = (state = initialState, action) => {
    return state;
}; 