import { BlueBall, Text, TextSelected, WhiteBall } from "./Ball.style";

interface BallProps {
  number: number;
  isSelected: boolean;
  onClick: (number: number, isSelected: boolean) => void;
}

export const Ball = ({ number, isSelected, onClick }: BallProps) => {
  return isSelected ? (
    <BlueBall onClick={() => onClick(number, !isSelected)}>
      <TextSelected>{number}</TextSelected>
    </BlueBall>
  ) : (
    <WhiteBall onClick={() => onClick(number, !isSelected)}>
      <Text>{number}</Text>
    </WhiteBall>
  );
};
