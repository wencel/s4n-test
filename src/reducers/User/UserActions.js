import userContatns from './UserConstants';

export const editUser = user => ({
  type: userContatns.EDIT_USER,
  payload: user,
});

export const clearUser = user => ({
  type: userContatns.CLEAR_USER,
});

export const fetchUserRepos = username => ({
  type: userContatns.FETCH_USER_REPOS,
  payload: username,
});

export const saveUserRepos = repos => ({
  type: userContatns.SAVE_USER_REPOS,
  payload: repos,
});
