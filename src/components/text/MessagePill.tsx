import { HStack, Icon, Text } from "@chakra-ui/react";

interface MessagePillProps {
  message: string;
  icon: React.ReactNode;
}

export default function MessagePill({ message, icon }: MessagePillProps) {
  return (
    <HStack
      gap="paragraph"
      justifyContent="center"
      alignItems="center"
      bg="bg-surface"
      paddingX="4"
      paddingY="2"
      borderRadius="full"
      boxShadow="md"
    >
      <Icon>{icon}</Icon>
      <Text fontSize="md" color="text-primary">
        {message}
      </Text>
    </HStack>
  );
}
