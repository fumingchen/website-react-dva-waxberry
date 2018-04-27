import React, { PureComponent } from 'react'
import styles from './index.less'

export default class GlobalFooter extends PureComponent {
  render() {
    const linkList = [{
      key: 1,
      name: 'aaa'
    }, {
      key: 2,
      name: 'bbb'
    }, {
      key: 3,
      name: 'ccc'
    }];
    return (
      <footer>
        <ul className={`${styles.link} container`}>{linkList.map((item) =>
             <li key={item.key}>{item.name}</li>)}
        </ul>
        <div className={styles.copyright}>
          Copyright © 2018 | Privacy Policy
        </div>
      </footer>
    )
  }
}
