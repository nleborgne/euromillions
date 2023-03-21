import * as React from "react";
import Image from "next/image";
import { Container } from "./Header.styles";

export const Header = () => {
  return (
    <Container>
      <Image
        src="/euromillions.png"
        alt="Logo Euromillions"
        width={260}
        height={72.5}
      />
    </Container>
  );
};
