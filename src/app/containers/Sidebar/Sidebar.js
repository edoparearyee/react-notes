import { connect } from 'react-redux';
import { sidebarClose } from '../../actions/ui';

import Sidebar from '../../components/Sidebar/Sidebar';

const mapStateToProps = state => {
  return {
    mobileOpen: state.ui.sidebar.mobileOpen,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClose: () => dispatch(sidebarClose()),
  };
};

const SidebarContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar);

export default SidebarContainer;
