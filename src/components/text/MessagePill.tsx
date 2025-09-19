import { HStack, Text } from "@chakra-ui/react";
import DoneSvg from "@components/brand/done.svg";

interface MessagePillProps {
  message: string;
}

export default function MessagePill({ message }: MessagePillProps) {
  return (
    <HStack
      width="2/6"
      gap="paragraph"
      justifyContent="center"
      alignItems="center"
      bg="bg-surface"
      padding="2"
      borderRadius="full"
      boxShadow="md"
    >
      <DoneSvg stroke="var(--chakra-colors-text-primary)" />
      <Text fontSize="md" color="text-primary">
        {message}
      </Text>
    </HStack>
  );
}
