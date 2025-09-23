import type { ContainerProps } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";

interface BaseContainerProps {
  children: React.ReactNode;
  props?: ContainerProps;
}

export default function BaseContainer({
  children,
  props,
}: Readonly<BaseContainerProps>) {
  return (
    <Container direction="column" spaceY="page" {...props}>
      {children}
    </Container>
  );
}
