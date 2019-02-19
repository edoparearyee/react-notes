import { connect } from 'react-redux';
import { sidebarOpen } from '../../actions/ui';

import Header from '../../components/Header/Header';

const mapStateToProps = state => {
  return {
    mobileOpen: state.ui.sidebar.mobileOpen,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onOpen: () => dispatch(sidebarOpen()),
  };
};

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);

export default HeaderContainer;
