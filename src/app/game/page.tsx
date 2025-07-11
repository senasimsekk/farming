'use client';

import { useState } from 'react';
import styles from './Game.module.css';

export default function GamePage() {
  const [fields, setFields] = useState<string[]>(Array(16).fill('e')); 

 const handleClick = (index: number) => {
  setFields((prev) => {
    const updated = [...prev];
    const current = updated[index];

    if (current === 'e') updated[index] = 't';
    else if (current === 't') updated[index] = 'f';
    else if (current === 'f') updated[index] = 'b';
    else if (current === 'b') updated[index] = 'ç';
    else if (current === 'ç') updated[index] = 'k';
    else if (current === 'k') updated[index] = 'e';

    return updated;
  });
};

  


  return (
    <div className={styles.container}>
      

      <div className={styles.grid}>
        {fields.map((val, index) => (
          <button
            key={index}
            className={styles.card}
            onClick={() => handleClick(index)}
          >
            {val}
          </button>
        ))}
      </div>
    </div>
  );
}
