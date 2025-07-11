"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./Game.module.css";

export default function GamePage() {
  const [state, setState] = useState<string[]>(Array(16).fill(""));
  const [balance, setBalance] = useState<number>(100);
  const router = useRouter();



  const updateStage = (index: number, stage: string) => {
    setState((prev) => {
      const updated = [...prev];

      if(updated[index] === "") return updated;

      updated[index] = stage;
      return updated;
    });
  };

  const handleClick = (index: number) => {
    // Önce mevcut state ve balance'ı kontrol et
    const current = state[index];
    if (current === "" && balance >= 10) {
      // Hem state'i hem balance'ı birlikte güncelle
      const updated = [...state];
      updated[index] = "t";
      setState(updated);
      setBalance(balance - 10);
      setTimeout(() => updateStage(index, "f"), 2000);
      setTimeout(() => updateStage(index, "b"), 4000);
      setTimeout(() => updateStage(index, "ç"), 6000);
      setTimeout(() => updateStage(index, "k"), 10000);
    } else if (current === "ç") {
      const updated = [...state];
      updated[index] = "";
      setState(updated);
      setBalance(balance + 20);
    } else if (
      current === "t" ||
      current === "f" ||
      current === "b" ||
      current === "k"
    ) {
      const updated = [...state];
      updated[index] = "";
      setState(updated);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Balance: ${balance}</h1>
      <div className={styles.topBar}>
        <button className={styles.storeBtn} onClick={() => router.push("/store")}>Store</button>
      </div>
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