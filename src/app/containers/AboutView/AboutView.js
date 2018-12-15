import { connect } from 'react-redux';

import AboutView from '../../components/AboutView/AboutView';
import {
  fetchContributors,
  contributorsClear,
} from '../../actions/contributors';

const mapStateToProps = state => {
  return {
    loading: state.contributors.loading,
    items: state.contributors.items,
    error: state.contributors.error,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchContributors: () => fetchContributors(dispatch),
  clearContributors: () => dispatch(contributorsClear()),
});

const AboutViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AboutView);

export default AboutViewContainer;
