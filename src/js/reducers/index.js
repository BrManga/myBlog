import {
  ADD_ARTICLE,
  DELETE_ARTICLE,
  EDIT_ARTICLE,
  ADD_SLUG
} from "../constants/action-types";
import { data } from "../../data";
const initialState = data;

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return console.log("rootReducer");

    case DELETE_ARTICLE:
      return Object.assign({}, state, {
        articles: state.concat(action.payload)
      });
    case EDIT_ARTICLE:
      return Object.assign({}, state, {
        articles: state.concat(action.payload)
      });
    case ADD_SLUG:
      console.log("slugy");

      return Object.assign({}, state, {
        slug: action.payload
      });
    default:
      return state;
  }
};
export default rootReducer;
