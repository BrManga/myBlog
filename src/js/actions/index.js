import {
  ADD_ARTICLE,
  DELETE_ARTICLE,
  EDIT_ARTICLE,
  SAVE_ARTICLE
} from "../constants/action-types.js";
export const addArticle = payload => {
  return { type: ADD_ARTICLE, payload };
};
export const deleteArticle = id => {
  return { type: DELETE_ARTICLE, id:id };
};
export const editArticle = id => {
  return { type: EDIT_ARTICLE, id:id };
};
export const saveArticle = payload => {
  return { type: SAVE_ARTICLE, payload:payload };
};
