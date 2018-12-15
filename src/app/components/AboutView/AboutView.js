import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import './AboutView.scss';

class AboutView extends Component {
  componentDidMount() {
    this.props.fetchContributors();
  }

  componentWillUnmount() {
    this.props.clearContributors();
  }

  render() {
    const { error, loading, items } = this.props;
    let contributors;

    if (error) {
      contributors = <p>Error! {error.message}</p>;
    } else if (loading) {
      contributors = <p>Loading...</p>;
    } else {
      contributors = (
        <ul className="ContributorList">
          {items.map(item => (
            <li key={item.id} className="ContributorList__Item">
              <img
                className="ContributorList__Image"
                src={item.avatar_url}
                alt={item.login}
              />
              <p className="Contributor__Name">{item.login}</p>
            </li>
          ))}
        </ul>
      );
    }

    return (
      <div className="AboutView">
        <h1>About</h1>
        <p>
          Officia cillum ea incididunt laborum velit. Deserunt voluptate
          exercitation deserunt ex occaecat fugiat enim incididunt sit est.
          Exercitation laborum ex fugiat in amet laboris reprehenderit velit
          tempor dolore nostrud do.
        </p>
        <h2>Contributors</h2>
        {contributors}
      </div>
    );
  }
}

AboutView.propTypes = {
  loading: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      login: PropTypes.string,
      id: PropTypes.number,
      node_id: PropTypes.string,
      avatar_url: PropTypes.string,
      gravatar_id: PropTypes.string,
      url: PropTypes.string,
      html_url: PropTypes.string,
      followers_url: PropTypes.string,
      following_url: PropTypes.string,
      gists_url: PropTypes.string,
      starred_url: PropTypes.string,
      subscriptions_url: PropTypes.string,
      organizations_url: PropTypes.string,
      repos_url: PropTypes.string,
      events_url: PropTypes.string,
      received_events_url: PropTypes.string,
      type: PropTypes.string,
      site_admin: PropTypes.bool,
      contributiors: PropTypes.number,
    }),
  ).isRequired,
  error: PropTypes.object,
  fetchContributors: PropTypes.func.isRequired,
  clearContributors: PropTypes.func.isRequired,
};

export default AboutView;
