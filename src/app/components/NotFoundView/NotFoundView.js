import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './NotFoundView.scss';

class NotFoundView extends Component {
  constructor(route) {
    super();
    this.location = route.location;
  }
  render() {
    return (
      <div className="NotFoundView">
        <h1>Page Not Found</h1>
        <p>
          No match for <code>{this.location.pathname}</code>
        </p>
      </div>
    );
  }
}

NotFoundView.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default NotFoundView;
