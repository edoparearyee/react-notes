import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import CircularProgress from '@material-ui/core/CircularProgress';

import './AboutView.scss';

class AboutView extends Component {
  componentDidMount() {
    this.props.fetchContributors();
  }

  componentWillUnmount() {
    this.props.clearContributors();
  }

  render() {
    let { error, loading, items } = this.props;
    let contributors;

    if (error) {
      contributors = (
        <Typography variant="body2" gutterBottom color="error">
          Error! {error.message}
        </Typography>
      );
    } else if (loading) {
      contributors = <CircularProgress />;
    } else {
      contributors = (
        <ul className="ContributorList">
          {items.map(item => (
            <li key={item.id} className="ContributorList__Item">
              <Card>
                <CardHeader
                  avatar={<Avatar aria-label="Recipe" src={item.avatar_url} />}
                  title={item.login}
                  subheader={item.contributions}
                />
              </Card>
            </li>
          ))}
        </ul>
      );
    }

    return (
      <div className="AboutView">
        <Typography component="h1" variant="h4" gutterBottom>
          About
        </Typography>
        <Typography variant="body1" gutterBottom>
          Officia cillum ea incididunt laborum velit. Deserunt voluptate
          exercitation deserunt ex occaecat fugiat enim incididunt sit est.
          Exercitation laborum ex fugiat in amet laboris reprehenderit velit
          tempor dolore nostrud do.
        </Typography>
        <Typography component="h2" variant="h5" gutterBottom>
          Contributors
        </Typography>
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
      contributions: PropTypes.number,
    }),
  ).isRequired,
  error: PropTypes.object,
  fetchContributors: PropTypes.func.isRequired,
  clearContributors: PropTypes.func.isRequired,
};

export default AboutView;
