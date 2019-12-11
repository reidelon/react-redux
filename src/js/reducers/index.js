import { ADD_ARTICLE, ADD_TEMPERATURE } from "../constants/action-types";

const initialState = {
  articles: [],
  temperature: '', 
  scale_origin: ''
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  if (action.type === ADD_TEMPERATURE) {
    return {...state, ...action.payload};
  }
  return state;
}

export default rootReducer;
