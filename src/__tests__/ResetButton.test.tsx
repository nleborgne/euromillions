/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ResetButton } from "../components/ResetButton";
import "@testing-library/jest-dom";

interface Props {
    onClick: () => void;
}

const props: Props = {
    onClick: () => {},
};

describe("<ResetButton />", () => {
    render(<ResetButton {...props} />);
    const resetButton = screen.getByTestId("reset-button");

    test("Check ResetButton rendering", async () => {
        expect(resetButton).toBeInTheDocument();
    });

    test("Check ResetButton text", async () => {
        expect(resetButton).toHaveTextContent("Effacer");
    });

    test("Check ResetButton click behavior", async () => {
        const clickFunction = jest.fn();
        render(<ResetButton onClick={clickFunction} />);
        fireEvent.click(screen.getByText("Effacer"));
        expect(clickFunction).toHaveBeenCalledTimes(1);
    });
});
