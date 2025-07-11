"use client";
import { createContext, useState } from "react";

export const GameContext = createContext<any>(null);

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [balance, setBalance] = useState(100);

  return (
    <GameContext.Provider value={{ balance, setBalance }}>
      {children}
    </GameContext.Provider>
  );
}