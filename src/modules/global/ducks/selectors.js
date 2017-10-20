import { createSelector } from 'reselect';

export const getLoggedUser = state => state.global.loggedUser;