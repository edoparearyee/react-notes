export const CONTRIBUTORS_LOAD = '[CONTRIBUTORS] Contributors Load';
export const CONTRIBUTORS_LOAD_SUCCESS =
  '[CONTRIBUTORS] Contributors Load Success';
export const CONTRIBUTORS_LOAD_FAIL = '[CONTRIBUTORS] Contributors Load Fail';
export const CONTRIBUTORS_CLEAR = '[CONTRIBUTORS] Contributors Clear';

const API_URL =
  'https://api.github.com/repos/edoparearyee/react-notes/contributors';

function contributorsLoad() {
  return {
    type: CONTRIBUTORS_LOAD,
  };
}

function contributorsLoadSuccess(contributors) {
  return {
    type: CONTRIBUTORS_LOAD_SUCCESS,
    contributors,
  };
}

function contributorsLoadFail(error) {
  return {
    type: CONTRIBUTORS_LOAD_FAIL,
    error,
  };
}

export function contributorsClear() {
  return { type: CONTRIBUTORS_CLEAR };
}

export function fetchContributors(dispatch) {
  dispatch(contributorsLoad());

  return fetch(API_URL)
    .then(
      response => response.json(),
      error => dispatch(contributorsLoadFail(error)),
    )
    .then(response => dispatch(contributorsLoadSuccess(response)));
}
