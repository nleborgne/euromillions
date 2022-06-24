/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
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
});
