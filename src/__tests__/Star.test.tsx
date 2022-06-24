/**
 * @jest-environment jsdom
 */
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Star } from "../components/Star";
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

describe("<Star />", () => {
    render(<Star {...props} />);
    const star = screen.getByTestId("star");

    test("Check Star rendering", async () => {
        expect(star).toBeInTheDocument();
    });

    test("Check Star text", async () => {
        expect(star).toHaveTextContent("1");
    });

    test("Check Star click behavior", async () => {
        const clickFunction = jest.fn();
        render(<Star {...props} onClick={clickFunction} />);
        fireEvent.click(screen.getByText("1"));
        expect(clickFunction).toHaveBeenCalledTimes(1);
    });
});
