import React from "react";
import styles from "./ResetButton.module.css";

interface ResetButtonProps {
  onClick: () => void;
}

export const ResetButton: React.FC<ResetButtonProps> = ({ onClick }) => {
  return (
    <div data-testid="reset-button" style={{ textAlign: "center" }}>
      <button className={styles.button} onClick={onClick}>
        Effacer
      </button>
    </div>
  );
};
