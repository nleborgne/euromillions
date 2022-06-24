import React from "react";
import type { NextPage } from "next";
import { RootState } from "../app/store";
import { useDispatch, useSelector } from "react-redux";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Star } from "../components/Star";
import { GameBall } from "../components/GameBall";
import { GameBallType } from "../types/GameBall.type";
import { StarType } from "../types/Star.type";
import { update } from "../features/bet/betSlice";
import { Bet } from "../components/Bet";
import { ResetButton } from "../components/ResetButton";
import matrix  from "../utils/matrix.json";

const Home: NextPage = () => {
    const bet = useSelector((state: RootState) => state.bet.value);
    const dispatch = useDispatch();

    const [gameBalls, setGameBalls] = React.useState<GameBallType[]>([]);
    const [stars, setStars] = React.useState<StarType[]>([]);

    const starsAmount = 12;
    const gameBallsAmount = 50;

    React.useEffect(() => {
        const arrayGameBalls = [];
        for (let i = 1; i <= gameBallsAmount; i++) {
            arrayGameBalls.push({
                number: i,
                isSelected: false,
            });
        }
        const arrayStars = [];
        for (let i = 1; i <= starsAmount; i++) {
            arrayStars.push({
                number: i,
                isSelected: false,
            });
        }
        setGameBalls(arrayGameBalls);
        setStars(arrayStars);
    }, []);

    const handleGameBallClick = (number: number, isSelected: boolean) => {
        const newGameBalls = [...gameBalls];
        newGameBalls[number - 1].isSelected = isSelected;
        setGameBalls(newGameBalls);
        computeBet();
    };

    const handleStarsClick = (number: number, isSelected: boolean) => {
        const newStars = [...stars];
        newStars[number - 1].isSelected = isSelected;
        setStars(newStars);
        computeBet();
    };


    const computeBet = () => {
        let bet = 0;
        const selectedGameBalls = gameBalls.filter((gameBall) => gameBall.isSelected);
        const selectedStars = stars.filter((star) => star.isSelected);
        const multiple = matrix.multiples.filter((multiple) => multiple.pattern[0] === selectedGameBalls.length && multiple.pattern[1] === selectedStars.length)[0];
        if (multiple) {
            bet = multiple.cost.value / 100;
        }
        dispatch(update(bet));
    }

    const reset = () => {
        const newGameBalls = [...gameBalls];
        const newStars = [...stars];
        
        newGameBalls.forEach((gameBall) => gameBall.isSelected = false);
        newStars.forEach((star) => star.isSelected = false);
        
        setGameBalls(newGameBalls);
        setStars(newStars);

        computeBet();

    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Grille Euromillions</title>
                <meta name="description" content="Créez votre grille Euromillions facilement" />
            </Head>

            <div style={{ marginTop: "2%", textAlign: "center" }}>
                <Image src="/logo.png" alt="Logo Euromillions" width={260} height={72.5} />
            </div>

            <main className={styles.main}>
                <div className={styles.gridContainer}>
                    <div className={styles.gameBallContainer}>
                        {gameBalls.map((gameBall: GameBallType) => (
                            <GameBall
                                key={gameBall.number}
                                number={gameBall.number}
                                isSelected={gameBall.isSelected}
                                onClick={(number: number, isSelected: boolean) =>
                                    handleGameBallClick(number, isSelected)
                                }
                            />
                        ))}
                    </div>

                    <div className={styles.starContainer}>
                        {stars.map((star: StarType) => (
                            <Star
                                key={star.number}
                                number={star.number}
                                isSelected={star.isSelected}
                                onClick={(number: number, isSelected: boolean) => handleStarsClick(number, isSelected)}
                            />
                        ))}
                    </div>
                </div>
                <Bet value={bet} />
                <ResetButton onClick={() => reset()}/>
            </main>
        </div>
    );
};

export default Home;
