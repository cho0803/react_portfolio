import React, { useState } from 'react';
import styles from './Menu.module.scss';

import { NavLink } from 'react-router-dom';
import { TAB_ITEM, getContents } from 'utils/tab';
import Particle from 'pages/_components/Animations/Particle';

const categories = ["REACT & VUE PROJECT", "WEB PROJECT", "SCRIPT", "ANIMATION"];
interface MenuItem { title: string; desc: string; sectionId: string; }
const menuItems: MenuItem[] = [
  { title: "About Me", desc: "Who I am & My story", sectionId: "about" },
  { title: "Portfolio", desc: "Selected featured works", sectionId: "portfolio" },
  { title: "Projects", desc: "All development archives", sectionId: "projects" },
  { title: "Skills", desc: "Tech stacks & Libraries", sectionId: "skills" },
  { title: "Certifications", desc: "Licenses & Qualifications", sectionId: "certifications" },
  { title: "Education", desc: "Academic backgrounds", sectionId: "education" },
];

import { TabContent } from 'types/project';

export default function Win8StylePortfolio() {
  const [tabContentsList, setTabContentsList] = useState<TabContent[]>();
  
  const handleMouseOver = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { key } = e.currentTarget.dataset;
    setTabContentsList(getContents(String(key)));
  };

  return (
    <section id="main-dashboard" className={styles.pageContainer}>
      <div className={styles.bgGlowLeft} />
      <div className={styles.bgGlowRight} />
      <Particle />

      {/* 🌟 2️⃣ 메인 콘텐츠 컨테이너 (.tab) */}
      <div className={styles.tab}>
        
        {/* 🌟 3️⃣ 상단 카테고리 바 영역 (.categoryBar > .categoryItem) */}
        <ul className={styles.categoryBar}>
          {TAB_ITEM.map((item) => (
            <li key={item.key} className={styles.categoryItem}>
              <button data-key={item.key} onMouseOver={(e) => handleMouseOver(e)}>
                {item.tab}
              </button>
            </li>
          ))}
        </ul>

        {/* 🌟 4️⃣ 하단 카드 그리드 영역 (.tabContents > .menuGrid > .menuItem) */}
        <div key={tabContentsList} className={styles.tabContents}>
          <ul >
            {tabContentsList?.map((item, idx) => (
              <li key={idx} >
                
                {/* 개별 카드 링크 (.menuCard) */}
                <NavLink to={item.href} className={styles.menuCard}>
                  
                  <div className={styles.indicatorArea}>
                    <div className={styles.cardHoverGlow} />
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
