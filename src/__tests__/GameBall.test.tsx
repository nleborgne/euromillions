/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import { GameBall } from "../components/GameBall";
import "@testing-library/jest-dom";

interface Props {
    number: number;
    isSelected: boolean;
    onClick: () => void;
}

const props: Props = {
    number: 1,
    isSelected: false,
    onClick: () => {},
};

describe("<GameBall />", () => {
    render(<GameBall {...props} />);
    const gameBall = screen.getByTestId("game-ball");

    test("Check GameBall rendering", async () => {
        expect(gameBall).toBeInTheDocument();
    });

    test("Check Gameball text", async () => {
        expect(gameBall).toHaveTextContent("1");
    });
});
