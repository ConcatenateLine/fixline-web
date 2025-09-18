import { Container, Stack } from "@chakra-ui/react";
import MessagePill from "@components/MessagePill";

export default function HeroSection() {
  return (
    <Container>
      <Stack gap="8" justifyContent="center" alignItems="center">
        <MessagePill message="Trusted by 50,000+ companies worldwide" />
      </Stack>
    </Container>
  );
}
