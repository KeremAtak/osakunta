import { FETCH_TEXT } from "../actions/types";

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_TEXT:
            return action.payload;
        default:
            return state;
    }
};