import { Box, Icon, Stack, Text } from "@chakra-ui/react";

interface SquareCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

export default function SquareCard({ icon, value, label }: SquareCardProps) {
  return (
    <Box
      border="var(--chakra-borders-border-subtle)"
      rounded="xl"
      shadow="sm"
      backdropFilter="blur(9px)"
      background="transparent-blur"
    >
      <Stack
        gap="iconText"
        justifyContent="center"
        alignItems="center"
        padding="cardPadding"
      >
        <Box padding="iconPadding" bg="secondary-accent" rounded="md">
          <Icon size="xl" stroke="var(--chakra-colors-text-primary)">
            {icon}
          </Icon>
        </Box>
        <Text fontSize="2xl" fontWeight="bold" color="text-primary">
          {value}
        </Text>
        <Text fontSize="md" color="text-secondary">
          {label}
        </Text>
      </Stack>
    </Box>
  );
}
