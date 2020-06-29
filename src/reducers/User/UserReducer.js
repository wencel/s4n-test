import userConstants from './UserConstants';

const initialState = {
  user: null,
  repos: {
    error: false,
    loading: false,
    list: [],
  },
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.EDIT_USER:
      return {
        ...state,
        user: action.payload,
      };
    case userConstants.CLEAR_USER:
      return {
        ...state,
        user: null,
      };
    case userConstants.SAVE_USER_REPOS:
      return {
        ...state,
        repos: {
          ...state.repos,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};
export default userReducer;
