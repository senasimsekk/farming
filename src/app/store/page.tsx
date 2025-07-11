"use client";

import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./Store.module.css";
import { GameContext } from "../context/GameContext";

export default function StorePage() {
  const router = useRouter();
  const { balance, setBalance, inventory, setInventory } = useContext(GameContext);
  const [quantity, setQuantity] = useState(0);

  const price = 20;
  const total = price * quantity;

  const handlePurchase = () => {
    if (balance >= total && quantity > 0) {
      setBalance(balance - total);
      setInventory((prev) => ({
        ...prev,
        lale: ((prev && prev.lale) || 0) + quantity,
      }));
      setQuantity(0);
    } else {
      alert("Yetersiz bakiye ya da geçersiz adet.");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Marketplace</h1>

      <div className={styles.storeGrid}>
        <div className={styles.card}>
          
          <h3>Lale</h3>
          <p className={styles.price}>${price} / adet</p>

          <div className={styles.controls}>
            <button className={styles.button} onClick={() => setQuantity(Math.max(0, quantity - 1))}>-</button>
            <span>{quantity}</span>
            <button className={styles.button} onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>

          <p>Toplam: ${total}</p>
          <button className={styles.button} onClick={handlePurchase}>Tohum Al</button>
          <p>Stok: {(inventory && inventory.lale) || 0}</p>
        </div>
      </div>

      <p className={styles.balance}>Bakiyeniz: ${balance}</p>

      <button className={styles.backButton} onClick={() => router.push("/game")}>
        Back to Game
      </button>
    </div>
  );
}