'use client';

import styles from './Game.module.css';

export default function GamePage() {
  const handleClick = () => {
    alert('tıklama çalıştı');
    // Burada kartın işlevselliğini ekleyebilirsiniz
    // Örneğin, kartın durumunu güncelleme veya başka bir işlem yapma
    
  };

  return (
    <div className={styles.container}>
      

      <div className={styles.grid}>
        <button className={styles.card} onClick={handleClick}></button>
        <button className={styles.card} onClick={handleClick}></button>
        <button className={styles.card} onClick={handleClick}></button>
        <button className={styles.card} onClick={handleClick}></button>

        <button className={styles.card} onClick={handleClick}></button>
        <button className={styles.card} onClick={handleClick}></button>
        <button className={styles.card} onClick={handleClick}></button>
        <button className={styles.card} onClick={handleClick}></button>

        <button className={styles.card} onClick={handleClick}></button>
        <button className={styles.card} onClick={handleClick}></button>
        <button className={styles.card} onClick={handleClick}></button>
        <button className={styles.card} onClick={handleClick}></button>

        <button className={styles.card} onClick={handleClick}></button>
        <button className={styles.card} onClick={handleClick}></button>
        <button className={styles.card} onClick={handleClick}></button>
        <button className={styles.card} onClick={handleClick}></button>
      </div>
    </div>
  );
}