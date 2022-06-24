import React from "react";
import styles from "../styles/GameBall.module.css";
import Image from "next/image";

interface GameBallProps {
    number: number;
    isSelected: boolean;
    onClick: (number: number, isSelected: boolean) => void;
}

export const GameBall: React.FC<GameBallProps> = ({
    number,
    isSelected,
    onClick,
}) => {
    return (
        <div
            data-testid="game-ball"
            className={styles.image}
            onClick={() => onClick(number, !isSelected)}
        >
            <Image
                alt="game ball"
                src={isSelected ? "/game_ball.png" : "/game_ball_white.png"}
                width={40}
                height={40}
            />
            <p className={isSelected ? styles.textSelected : styles.text}>
                {number}
            </p>
        </div>
    );
};
