import React from "react";

interface BetProps {
  value: number;
}

export const Bet: React.FC<BetProps> = ({ value }) => {
  return <h2 style={{ textAlign: "center" }}>Mise totale: {value}€</h2>;
};
