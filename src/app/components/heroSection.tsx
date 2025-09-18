import { Container, HStack, Stack, Text } from "@chakra-ui/react";
import DoneSvg from "@components/brand/done.svg";

export default function HeroSection() {
  return (
    <Container>
      <Stack gap={4} justifyContent="center" alignItems="center">
        <HStack
          width="2/6"
          gap={2}
          justifyContent="center"
          alignItems="center"
          bg="bg-surface"
          padding="2"
          borderRadius="full"
          boxShadow="md"
        >
          <DoneSvg stroke={"var(--chakra-colors-text-primary)"} />
          <Text fontSize="md" color="text-primary">
            Trusted by 50,000+ companies worldwide
          </Text>
        </HStack>
      </Stack>
    </Container>
  );
}
