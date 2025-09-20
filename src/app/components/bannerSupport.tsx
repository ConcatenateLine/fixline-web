import { Button, Container, HStack, Stack, Text } from "@chakra-ui/react";

export default function BannerSupport() {
  return (
    <Container>
      <Stack
        position="absolute"
        padding="20"
        gap="stack"
        alignItems="center"
        bg="var(--chakra-colors-primary-accent)"
        marginInlineStart="-16"
        width="106%"
      >
        <Text fontSize="5xl" fontWeight="bold">
          Ready to Transform Your Support?
        </Text>
        <Text fontSize="xl" width="2xl" textAlign="center">
          Join thousands of companies already using our platform to deliver
          exceptional customer support.
        </Text>

        <HStack gap="stack">
          <Button variant="solid" size="2xl" rounded="xl">
            Start a chat
          </Button>
          <Button variant="outline" size="2xl" rounded="xl" borderWidth="2px">
            Schedule a Demo
          </Button>
        </HStack>
      </Stack>
    </Container>
  );
}
