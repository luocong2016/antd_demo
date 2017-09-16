import React from 'react';
import Header from './Header';
import styles from './MainLayout.less';

function MainLayout({ children, location }) {
  return (
    <div className={styles.normal}>
      <Header location={location} />
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}

export default MainLayout;
