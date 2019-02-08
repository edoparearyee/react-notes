export const CONTRIBUTORS_LOAD = '[CONTRIBUTORS] Contributors Load';
export const CONTRIBUTORS_LOAD_SUCCESS =
  '[CONTRIBUTORS] Contributors Load Success';
export const CONTRIBUTORS_LOAD_FAIL = '[CONTRIBUTORS] Contributors Load Fail';
export const CONTRIBUTORS_CLEAR = '[CONTRIBUTORS] Contributors Clear';

const API_URL =
  'https://api.github.com/repos/edoparearyee/react-notes/contributors';

export function contributorsLoad() {
  return {
    type: CONTRIBUTORS_LOAD,
  };
}

export function contributorsLoadSuccess(contributors) {
  return {
    type: CONTRIBUTORS_LOAD_SUCCESS,
    contributors,
  };
}

export function contributorsLoadFail(error) {
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
    .then(response => {
      if (response.status === 200) {
        response.json().then(data => {
          const action = contributorsLoadSuccess(data);
          return dispatch(action);
        });
      }
    })
    .catch(error => dispatch(contributorsLoadFail(error)));
}
