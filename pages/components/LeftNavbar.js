import { faBoxesPacking, faChartSimple, faCog, faEnvelope, faHome, faSignOut, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import styles from '../../styles/Home.module.css'

export const LeftNavbar = () => {
  return (
    <div className={styles.navcontainer}>
        <div className={styles.logo}>
          <h2>Streamline</h2>
        </div>
        <div className={styles.wrapper}>
          <ul>
            <li>
              <FontAwesomeIcon icon={faHome} style={{width:"18px", cursor:"pointer"}} />
              <a href="#">Dashboard</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faChartSimple} style={{width:"18px", cursor:"pointer"}} />
              <a href="#">Explore</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faUserGroup} style={{width:"18px", cursor:"pointer"}} />
              <a href="#">Library</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faBoxesPacking} style={{width:"18px", cursor:"pointer"}} />
              <a href="#">Favorite</a></li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} style={{width:"18px", cursor:"pointer"}} />
              <a href="#">Mailing</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faCog} style={{width:"18px", cursor:"pointer"}} />
              <a href="#">Setting</a>
            </li>
          </ul>
          <ul className={styles.logout}>
          <li>
          <a href="#">
              <FontAwesomeIcon icon={faSignOut} style={{width:"18px", cursor:"pointer"}} />
            </a></li>
          </ul>
        </div>
    </div>
  )
}

export default LeftNavbar;
