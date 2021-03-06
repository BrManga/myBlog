import {
  ADD_ARTICLE,
  DELETE_ARTICLE,
  EDIT_ARTICLE,
  SAVE_ARTICLE,
  FILTER_ARTICLE
} from "../constants/action-types";
import { initialState } from "../../data";

const deletebyId = (state = initialState, id) => {
  const { articles } = state;
  //console.log("reducer deletebyid", state);
  const articlesFiltered = articles.filter(article => article.id !== id);
  return { articles: articlesFiltered };
};
const filterArticle = (state, filterWord) => {
  //console.log("filterArticle", state.articles, "filterWord", filterWord);
  const tryIt = state.articles.filter(article => {
    let exists = false;
    article.topics.map(topic => {
      //  console.log("topic", topic);

      if (topic === filterWord) {
        exists = true;
      }
      return exists;
    });
    return exists;
  });
  return tryIt;
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      // console.log('state', state, "action.payload", action.payload);

      const newArticle = action.payload;
      state.articles.push(newArticle);
      return state;
    case DELETE_ARTICLE:
      //      console.log("rootReducer delete", action);
      return deletebyId(state, action.id);
    case EDIT_ARTICLE:
      //      console.log("rootReducer edit", state);
      const articleToEdit = state.articles.filter(article => {
        return article.id == action.id;
      });
      //      console.log("rootReducer articleToEdit", articleToEdit[0]);
      return { ...state, edit: articleToEdit[0] };
    case SAVE_ARTICLE:
      state = deletebyId(state, action.payload.id);
      //      console.log(
      //        "state articles",
      //        state.articles,
      //        "action payload",
      //        action.payload
      //      );
      const new1 = action.payload;
      state.articles.push(new1);
      const articc = { ...state.articles };
      //      console.log("articc son ", articc);
      return { ...state, articc };
    case FILTER_ARTICLE:
      const filteredArticels = filterArticle(state, action.filterWord);
      //      console.log("action payload", filteredArticels);
      return { ...state, filtered: filteredArticels };
    default:
      return state;
  }
};
export default rootReducer;
