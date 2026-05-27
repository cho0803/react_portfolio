import React, { useState } from 'react';
import styles from "./Animations.module.scss";

interface RotateContainerProps {
  children: React.ReactNode;
}

export default ({ children }: RotateContainerProps) => {
  const [degree, setDegree] = useState<number>(0);

  const spin = () => {
    setDegree((prev) => prev + 360);
  };

  return (
    <div
      onClick={spin}
      className={styles.spin} 
      style={{['--rotate-degree' as any]: `${degree}deg`,}}
    >
      {children}
    </div>
  );
};
