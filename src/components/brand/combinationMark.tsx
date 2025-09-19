import { Box, HStack, Text } from "@chakra-ui/react";
import Ticket from "@components/brand/ticket.svg";

export default function CombinationMark() {
  return (
    <HStack>
      <Box bg="secondary-accent" padding="1" borderRadius="lg">
        <Ticket
          fill="var(--chakra-colors-secondary-accent)"
          stroke="var(--chakra-colors-text-primary)"
        />
      </Box>
      <Text
        fontSize="2xl"
        fontWeight="bold"
        color="text-primary"
        fontFamily="heading"
      >
        Fixline
      </Text>
    </HStack>
  );
}
