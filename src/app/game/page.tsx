"use client";

import { useState } from "react";
import styles from "./Game.module.css";

export default function GamePage() {
  const [state, setState] = useState<string[]>(Array(16).fill(""));

  const updateStage = (index: number, stage: string) => {
    setState((prev) => {
      const updated = [...prev];
      updated[index] = stage;
      return updated;
    });
  };
  

  const handleClick = (index: number) => {
    setState((prev) => {
      const updated = [...prev];
      if (updated[index] === "") {
        updated[index] = "t";

        setTimeout(() => updateStage(index, "f"), 2000);
        setTimeout(() => updateStage(index, "b"), 4000);
        setTimeout(() => updateStage(index, "ç"), 6000);
        setTimeout(() => updateStage(index, "k"), 10000);
      }
      return updated;
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {state.map((val, index) => (
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
