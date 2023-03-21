import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Ball } from "ui";
import { RootState } from "../core/store";
import { Bet } from "../components/Bet/Bet";
import { ResetButton } from "../components/ResetButton/ResetButton";
import { Star } from "../components/Star/Star";
import { update } from "../core/feature/bet/betSlice";
import styles from "./Home.module.css";
import { GameBallType } from "../types/GameBall.type";
import { StarType } from "../types/Star.type";
import matrix from "../utils/matrix.json";
import { Header } from "../components/Header/Header";

const Home: NextPage = () => {
  const bet = useSelector((state: RootState) => state.bet.value);
  const dispatch = useDispatch();

  const [gameBalls, setGameBalls] = React.useState<GameBallType[]>([]);
  const [stars, setStars] = React.useState<StarType[]>([]);
  const [errorMessage, setErrorMessage] = React.useState<string>("");

  const starsAmount = 12;

  const gameBallsAmount = 50;
  const maxGameBallsAmount = 10;

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
    // We check if all balls have already been selected or not
    if (
      gameBalls.filter((ball) => ball.isSelected).length < maxGameBallsAmount ||
      isSelected == false
    ) {
      const newGameBalls = [...gameBalls];
      newGameBalls[number - 1].isSelected = isSelected;
      setGameBalls(newGameBalls);
      computeBet();
    }

    // If all the balls have been selected, we show a message
    if (
      gameBalls.filter((ball) => ball.isSelected).length ===
        maxGameBallsAmount &&
      isSelected
    ) {
      setErrorMessage("Vous avez sélectionné le nombre maximum de balles.");
    } else {
      setErrorMessage("");
    }
  };

  const handleStarsClick = (number: number, isSelected: boolean) => {
    const newStars = [...stars];
    newStars[number - 1].isSelected = isSelected;
    setStars(newStars);
    computeBet();
  };

  const computeBet = () => {
    let bet = 0;
    const selectedGameBalls = gameBalls.filter(
      (gameBall) => gameBall.isSelected
    );
    const selectedStars = stars.filter((star) => star.isSelected);
    const multiple = matrix.multiples.filter(
      (multiple) =>
        multiple.pattern[0] === selectedGameBalls.length &&
        multiple.pattern[1] === selectedStars.length
    )[0];
    if (multiple) {
      bet = multiple.cost.value / 100;
    }
    dispatch(update(bet));
  };

  const reset = () => {
    const newGameBalls = [...gameBalls];
    const newStars = [...stars];

    newGameBalls.forEach((gameBall) => (gameBall.isSelected = false));
    newStars.forEach((star) => (star.isSelected = false));

    setGameBalls(newGameBalls);
    setStars(newStars);
    setErrorMessage("");

    computeBet();
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Grille Euromillions</title>
        <meta
          name="description"
          content="Créez votre grille Euromillions facilement"
        />
      </Head>

      <Header />

      <main className={styles.main}>
        <div className={styles.gridContainer}>
          <div className={styles.gameBallContainer}>
            {gameBalls.map((gameBall: GameBallType) => (
              // eslint-disable-next-line react/jsx-no-undef
              <Ball
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
                onClick={(number: number, isSelected: boolean) =>
                  handleStarsClick(number, isSelected)
                }
              />
            ))}
          </div>
        </div>
        <Bet value={bet} />
        <div style={{ textAlign: "center", margin: "1% auto" }}>
          {errorMessage}
        </div>
        <ResetButton onClick={() => reset()} />
      </main>
    </div>
  );
};

export default Home;
