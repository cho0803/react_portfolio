import { useMemo } from "react";
import styles from "./Animations.module.scss";

import React from 'react';

interface ParticleProps {
  particle?: number;
}

export default ({ particle = 300 }: ParticleProps) => {
    const particles = [...Array(particle)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${i * 0.05}s`
    }));
  return (
    <div className={styles.branding}> 
      {particles.map((p) => (
        <div
          key={p.id}
          className={styles.particle}
          style={{
            left: p.left,
            top: p.top,
            animationDelay: p.delay
          }}
        />
      ))}
    </div>
  );
}
