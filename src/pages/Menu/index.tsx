import React, { useState } from 'react';
import styles from './Menu.module.scss';

import { NavLink } from 'react-router-dom';
import { TAB_ITEM, getContents , baseUrl} from 'utils/tab';
import Particle from 'Projects/Animations/Particle';
import { TabContent } from 'types/project';

export default () => {
  const [tabContentsList, setTabContentsList] = useState<TabContent[]>();
  const [tabKey, setTabKey] = useState<string>('react')

  const handleMouseOver = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { key } = e.currentTarget.dataset;
    setTabContentsList(getContents(String(key)));
    setTabKey(String(key));
  };

  return (
    <section id="main-dashboard" className={styles.pageContainer}>
      <div className={styles.bgGlowLeft} />
      <div className={styles.bgGlowRight} />
      <Particle />
      <div className={styles.tab}>
        <ul>
          {TAB_ITEM.map((item) => (
            <li key={item.key} className={styles.categoryItem}>
              <button data-key={item.key} onMouseOver={(e) => handleMouseOver(e)}>
                {item.tab}
              </button>
            </li>
          ))}
        </ul>
        <div className={styles.tabContents}>
          <ul>
            {tabContentsList?.map((item) => (
              <li key={item.id} >
                <NavLink to={`${baseUrl}/${tabKey}/${item.item}`} className={styles.menuCard}>
                  <div className={styles.indicatorArea}>
                    <svg className={styles.menuStarSvg} viewBox="0 0 24 24">
                      <polygon points="12,2.5 14.9,8.5 21.5,9.5 16.8,14.1 17.9,20.7 12,17.6 6.1,20.7 7.2,14.1 2.5,9.5 9.1,8.5" />
                    </svg>
                  </div>
                  <div className={styles.cardContent}>
                    <h3>{item.item}</h3>
                  </div>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
