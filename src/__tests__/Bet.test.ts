import reducer, { update } from "../features/bet/betSlice";

test("Should return the initial state of the bet", () => {
    expect(reducer(undefined, { type: null })).toEqual({
        value: 0,
    });
});

test("Should handle update for the bet", () => {
    const previousState = { value: 0 };
    expect(reducer(previousState, update(1))).toEqual({
        value: 1,
    });
});
