import React from "react";
import styles from "./Star.module.css";
import Image from "next/image";

interface StarProps {
  number: number;
  isSelected: boolean;
  onClick: any;
}

export const Star: React.FC<StarProps> = ({ number, isSelected, onClick }) => {
  return (
    <div
      data-testid="star"
      className={styles.image}
      onClick={() => onClick(number, !isSelected)}
    >
      <Image
        alt="etoile"
        src={isSelected ? "/etoile.svg" : "/etoile_white.svg"}
        width={60}
        height={60}
      />
      <p className={isSelected ? styles.textSelected : styles.text}>{number}</p>
    </div>
  );
};
