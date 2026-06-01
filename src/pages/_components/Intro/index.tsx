import React from 'react';

import Particle from "Projects/Animations/Particle"
import { info } from 'utils/info';
import styles from './Intro.module.scss';

const Intro : React.FC = () => {
  return (
    <section className={styles.section}>
      <Particle particle={100}/>
      <div className={styles.titleWrap}>
        <h1 className={styles.title}>PORTFOLIO</h1>
        <p className={styles.titleSlogan}>Creative Front-End Developer</p>
        <div className={styles.subInfoLine}>
          <div className={styles.dividerLine}></div>
        </div>
      </div>

      <div className={styles.infoWrap}>
        {info.map((item) =>(
        <div className={styles.info} key={item.id}>
          <div className={styles.iconCircle}>
            <item.svg />
          </div>
          <span className={styles.text}>
            <a href={item.href} target='_blank' rel='noreferrer'>
                {item.text} 
            </a>
          </span>
        </div>
        ))}
      </div>
    </section>
  );
};

export default Intro;
