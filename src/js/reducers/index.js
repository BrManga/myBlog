import {
  ADD_ARTICLE,
  DELETE_ARTICLE,
  EDIT_ARTICLE,
  SAVE_ARTICLE
} from "../constants/action-types";
import { initialState } from "../../data";

const deletebyId = (state = initialState, id) => {
  const { articles } = state;
  //console.log("reducer deletebyid", state);
  const articlesFiltered = articles.filter(article => article.id !== id);
  return { articles: articlesFiltered };
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return console.log("rootReducer add");
    case DELETE_ARTICLE:
      console.log("rootReducer delete", action);
      return deletebyId(state, action.id);
    case EDIT_ARTICLE:
      console.log("rootReducer edit", state);
      const articleToEdit = state.articles.filter(article => {
        return article.id == action.id;
      });
      console.log("rootReducer articleToEdit", articleToEdit[0]);

      return {...state, edit: articleToEdit[0] };
    case SAVE_ARTICLE:
      const tempState = state.push(action.payload);

      console.log("rootReducer save", action.id);
      return tempState;
    default:
      return state;
  }
};
export default rootReducer;
