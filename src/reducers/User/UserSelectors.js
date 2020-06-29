import { createSelector } from 'reselect';

const userSelectorState = state => state.user;

export const userSelector = createSelector(
  userSelectorState,
  state => state.user
);

export const reposSelector = createSelector(
  userSelectorState,
  state => state.repos
);
