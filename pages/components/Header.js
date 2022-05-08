import React from 'react'
import Image from 'next/image'
import DateObject from "react-date-object";
import styles from './../../styles/Home.module.css'
import watermark from './../../public/watermark.png'
import { faBell, faBellConcierge, faBellSlash, faCalendar, faCalendarDay, faFingerprint, faHandPointRight, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Header = () => {
  var date = new DateObject();

  return (
    <div className={styles.headcontainer}>
      <div className={styles.headwrapper}>
        <div className={styles.searchbar}>
          <FontAwesomeIcon icon={faSearch} style={{width:"12px", cursor:"pointer"}} />
          <input placeholder="Search for Anything"/>
        </div>
      
      <div className={styles.dateheader}>
        <FontAwesomeIcon icon={faCalendarDay} style={{width:"12px", cursor:"pointer"}} /> Today is <span> {date.format("dddd DD")}</span>
      </div>
      <div className={styles.profile}>
          <a href='#' className={styles.headerbtn}><span>You have <strong>27</strong> new leads <FontAwesomeIcon icon={faHandPointRight} style={{width:"12px", cursor:"pointer"}} /></span></a>
          <FontAwesomeIcon icon={faBell} style={{width:"12px", cursor:"pointer"}} />
          <Image src={watermark} alt="profile" className={styles.image} width="100px" height="100px" layout="responsive" objectFit="cover"/>
			</div>
</div>
    </div>
  )
}

export default Header;