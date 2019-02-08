import { contributors as reducer } from './contributors';
import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from '../actions/contributors';
import fetchMock from 'fetch-mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mockContributors = [
  {
    login: 'foo',
    id: 123,
    node_id: 'foo',
    avatar_url: 'http://example.com/foo/some_url.jpg',
    gravatar_id: 'abc',
    url: 'http://example.com/foo',
    html_url: 'http://example.com/foo',
    followers_url: 'http://example.com/foo/followers',
    following_url: 'http://example.com/foo/following',
    gists_url: 'http://example.com/foo/gists',
    starred_url: 'http://example.com/foo/starred',
    subscriptions_url: 'http://example.com/foo/subscriptions',
    organizations_url: 'http://example.com/foo/organizations',
    repos_url: 'http://example.com/foo/repos',
    events_url: 'http://example.com/foo/events',
    received_events_url: 'http://example.com/foo/received_events',
    type: 'bar',
    site_admin: false,
    contributors: 1,
  },
];

const mockError = {
  message: 'Some error',
};

describe('contributors reducer', () => {
  it('should return the initial state', () => {
    const expected = {
      loading: false,
      items: [],
      error: null,
    };
    const result = reducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should handle CONTRIBUTORS_LOAD', () => {
    const state = {
      loading: false,
      items: [],
      error: null,
    };
    const expected = {
      loading: true,
      items: [],
      error: null,
    };
    const action = actions.contributorsLoad();
    const result = reducer(state, action);
    expect(result).toEqual(expected);
  });

  it('should handle CONTRIBUTORS_LOAD_SUCCESS', () => {
    const state = {
      loading: false,
      items: [],
      error: null,
    };
    const expected = {
      loading: false,
      items: mockContributors,
      error: null,
    };
    const action = actions.contributorsLoadSuccess(mockContributors);
    const result = reducer(state, action);
    expect(result).toEqual(expected);
  });

  it('should handle CONTRIBUTORS_LOAD_FAIL', () => {
    const state = {
      loading: false,
      items: [],
      error: null,
    };
    const expected = {
      loading: false,
      items: [],
      error: mockError,
    };
    const action = actions.contributorsLoadFail(mockError);
    const result = reducer(state, action);
    expect(result).toEqual(expected);
  });

  it('should handle CONTRIBUTORS_CLEAR', () => {
    const state = {
      loading: false,
      items: mockContributors,
      error: null,
    };
    const expected = {
      loading: false,
      items: [],
      error: null,
    };
    const action = actions.contributorsClear();
    const result = reducer(state, action);
    expect(result).toEqual(expected);
  });
});

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates CONTRIBUTORS_LOAD_SUCCESS when fetching contributors has been done', () => {
    const store = mockStore({
      loading: false,
      items: [],
      error: null,
    });
    const expected = [
      { type: actions.CONTRIBUTORS_LOAD },
      {
        type: actions.CONTRIBUTORS_LOAD_SUCCESS,
        contributors: mockContributors,
      },
    ];

    fetchMock.getOnce(
      'https://api.github.com/repos/edoparearyee/react-notes/contributors',
      {
        body: mockContributors,
        headers: { 'content-type': 'application/json' },
      },
    );

    return actions.fetchContributors(store.dispatch).then(() => {
      const result = store.getActions();
      expect(result).toEqual(expected);
    });
  });

  it('creates CONTRIBUTORS_LOAD_FAIL when fetching contributors has failed', () => {
    const error = { message: 'Request error' };

    const store = mockStore({
      loading: false,
      items: [],
      error: null,
    });
    const expected = [
      { type: actions.CONTRIBUTORS_LOAD },
      {
        type: actions.CONTRIBUTORS_LOAD_FAIL,
        error,
      },
    ];

    fetchMock.getOnce(
      'https://api.github.com/repos/edoparearyee/react-notes/contributors',
      { throws: error },
    );

    return actions.fetchContributors(store.dispatch).then(() => {
      const result = store.getActions();
      expect(result).toEqual(expected);
    });
  });
});
