import {
  ADD_ARTICLE,
  DELETE_ARTICLE,
  EDIT_ARTICLE, ADD_SLUG
} from "../constants/action-types.js";
export const addArticle=(payload)=> {
  
  return { type: ADD_ARTICLE, payload };
}
export const deleteArticle=(payload)=> {
  return { type: DELETE_ARTICLE, payload };
}
export const editArticle=(payload) =>{
  return { type: EDIT_ARTICLE, payload };
}
export const addSlug=(payload) =>{
  return { type: EDIT_ARTICLE, payload };
}
