
import {
  ADD_ARTICLE,
  DELETE_ARTICLE,
  EDIT_ARTICLE,
} from "../constants/action-types";
import { initialState } from "../../data";

const deletebyId = (state = initialState, id) => {
  const { articles } = state;
  //console.log("reducer deletebyid", state);
  const articlesFiltered = articles.filter(article => article.id !== id);
  return {articles:articlesFiltered};
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return console.log("rootReducer add");
    case DELETE_ARTICLE:
      console.log("rootReducer delete", action);
      return deletebyId(state, action.id);
    case EDIT_ARTICLE:
      console.log("rootReducer edit", action.id);
      return state;
    default:
      return state;
  }
};
export default rootReducer;
