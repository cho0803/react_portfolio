import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { TAB_ITEM, getContents , baseUrl} from 'utils/tab';
import { TabContent } from 'types/projects';

import Particle from 'Projects/Animations/Particle';
import styles from './Menu.module.scss';

export default () => {
  const [tabContentsList, setTabContentsList] = useState<TabContent[]>();
  const [tabKey, setTabKey] = useState<string>()

  const handleMouseOver = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { key } = e.currentTarget.dataset;
    setTabContentsList(getContents(String(key)));
    setTabKey(String(key));
  };

  return (
    <section className={styles.pageContainer}>
      <h2 className={styles.ir_su}>Menu</h2>
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
        <div key={tabContentsList?.[0].item} className={styles.tabContents}>
          <ul>
            {tabContentsList?.map((item) => (
              <NavLink key={item.id} to={`${baseUrl}/${tabKey}/${item.item}`}>
                <li>
                  <div className={styles.indicatorArea}>
                    <svg className={styles.menuStarSvg} viewBox="0 0 24 24">
                      <polygon points="12,2.5 14.9,8.5 21.5,9.5 16.8,14.1 17.9,20.7 12,17.6 6.1,20.7 7.2,14.1 2.5,9.5 9.1,8.5" />
                    </svg>
                  </div>
                  <div className={styles.cardContent}>
                    <h3>{item.item}</h3>
                  </div>
                </li>
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
