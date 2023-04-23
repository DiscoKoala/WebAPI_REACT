import {combineReducers, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import authReducer from "../reducers/authReducer";
import movieReducer from "../reducers/movieReducer";
const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
    const { logger } = require('redux-logger');

    middlewares.push(logger);
}

const store = configureStore(
    combineReducers( {
        auth: authReducer,
        movie: movieReducer
    }),
    applyMiddleware(
        ...middlewares
    )
);

export default store;