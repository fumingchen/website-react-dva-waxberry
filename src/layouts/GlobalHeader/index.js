import React, { PureComponent } from 'react'
import { Link } from 'dva/router';
import { navList } from './index_config'
import styles from './index.less'

export default class GlobalHeader extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const { location } = this.props;
    return (
      <header className={styles.header}>
        <img src="" />
        <nav>
          {navList.map(item => (
            <Link key = {item.key}
                  to = {item.path}
                  className={location.pathname === item.path ? styles.active : ''}>
              {item.title}
            </Link>
          ))}
        </nav>
      </header>
    )
  }
}
