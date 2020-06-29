import { call, put, takeLatest } from 'redux-saga/effects';
import userContatns from './UserConstants';
import { saveUserRepos } from './UserActions';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUserRepos(action) {
  yield put(saveUserRepos({ loading: true, error: false }));
  try {
    const data = yield call(
      fetch,
      `https://api.github.com/users/${action.payload}/repos?per_page=200`
    );
    const repos = yield call([data, data.json]);
    if (repos.message === 'Not Found') {
      yield put(saveUserRepos({ loading: false, list: [], error: true }));
    } else {
      yield put(saveUserRepos({ loading: false, list: repos, error: false }));
    }
  } catch (e) {
    yield put(saveUserRepos({ loading: false, list: [], error: true }));
  }
}

export default function* userSaga() {
  yield takeLatest(userContatns.FETCH_USER_REPOS, fetchUserRepos);
}
