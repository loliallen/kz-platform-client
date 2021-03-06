import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga"

import { combinedReducers } from "./reducers";

import { composeWithDevTools } from 'redux-devtools-extension';

export const saga = createSagaMiddleware()
export const store = createStore(combinedReducers, composeWithDevTools(
    applyMiddleware(
        saga
    )
))