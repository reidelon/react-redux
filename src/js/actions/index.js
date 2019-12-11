import { ADD_ARTICLE, ADD_TEMPERATURE } from "../constants/action-types";

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload }
};

export function addTemperature(payload) {
  return { type: ADD_TEMPERATURE, payload }
};
