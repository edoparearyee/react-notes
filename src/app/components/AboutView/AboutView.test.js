import React from 'react';
import { shallow, mount } from 'enzyme';

import AboutView from './AboutView';

const contributors = [
  { id: 0, avatar_url: 'http://foo.com/image1.jpg', login: 'foo' },
  { id: 1, avatar_url: 'http://foo.com/image2.jpg', login: 'bar' },
];

const noop = () => null;

describe('AboutView', () => {
  it('renders when loading', () => {
    const component = shallow(
      <AboutView
        loading={true}
        items={[]}
        fetchContributors={noop}
        clearContributors={noop}
      />,
    );

    expect(component).toMatchSnapshot();
  });

  it('renders when not loading', () => {
    const component = shallow(
      <AboutView
        loading={false}
        items={contributors}
        fetchContributors={noop}
        clearContributors={noop}
      />,
    );

    expect(component).toMatchSnapshot();
  });

  it('renders when there is an error', () => {
    const component = shallow(
      <AboutView
        loading={false}
        items={[]}
        error={{ message: 'Something went wrong!' }}
        fetchContributors={noop}
        clearContributors={noop}
      />,
    );

    expect(component).toMatchSnapshot();
  });

  it('fetches and clears contributors', () => {
    const mockFetchContributors = jest.fn();
    const mockClearContributors = jest.fn();

    expect(mockFetchContributors).not.toHaveBeenCalled();
    expect(mockClearContributors).not.toHaveBeenCalled();

    const component = mount(
      <AboutView
        loading={true}
        items={[]}
        fetchContributors={mockFetchContributors}
        clearContributors={mockClearContributors}
      />,
    );

    expect(mockFetchContributors).toHaveBeenCalled();

    component.unmount();
    expect(mockClearContributors).toHaveBeenCalled();
  });
});
