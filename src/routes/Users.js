import React, { PropTypes } from 'react';
import { connect } from 'dva';
import styles from './Users.less';
import UsersComponent from '../components/Users/Users';
import MainLayout from '../components/MainLayout/MainLayout';


function Users({ location }) {
  return (
    <MainLayout location={location}>
      <div className={styles.normal}>
        <UsersComponent />
      </div>
    </MainLayout>
  );
}

Users.propTypes = {
};

function mapStateToProps({ users }) {
  return { users };
}

export default connect(mapStateToProps)(Users);
